using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipolApi.DTOs;
using RecipolApi.Model;

namespace RecipolApi.Controllers
{
    [ApiController]
    [Route("api/recipes")]
    public class RecipeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RecipeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllRecipes()
        {
            var recipes = await _context.Recipes
                .Select(r => new RecipeDto
                {
                    Id = r.Id,
                    Name = r.Name,
                    Description = r.Description,
                    Category = r.Category
                })
                .ToListAsync();

            return Ok(recipes);
        }

        [HttpGet("{recipeId}/ingredients")]
        public async Task<IActionResult> GetRecipeIngredients(int recipeId)
        {
            var ingredients = await _context.RecipeIngredients
                .Where(ri => ri.RecipeId == recipeId)
                .Include(ri => ri.Ingredient)
                .Select(ri => new RecipeIngredientDto
                {
                    IngredientId = ri.IngredientId,
                    Name = ri.Ingredient.Name,
                    Unit = ri.Ingredient.Unit,
                    Quantity = (double)ri.Quantity
                })
                .ToListAsync();

            return Ok(ingredients);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRecipeById(int id)
        {

            var recipe = await _context.Recipes
                .Include(r => r.RecipeIngredients)
                    .ThenInclude(ri => ri.Ingredient)
                .FirstOrDefaultAsync(r => r.Id == id);

            if (recipe == null)
            {
                return NotFound(new { message = "Recipe not found." });
            }

       
            var recipeDetails = new
            {
                recipe.Id,
                recipe.Name,
                recipe.Description,
                recipe.Instructions,
                recipe.Category,
                Ingredients = recipe.RecipeIngredients.Select(ri => new
                {
                    ri.IngredientId,
                    ri.Ingredient.Name,
                    ri.Ingredient.Category,
                    ri.Ingredient.Unit,
                    Quantity = (double)ri.Quantity
                }).ToList()
            };

            return Ok(recipeDetails);
        }


        [HttpGet("category/{category}")]
        public async Task<IActionResult> GetRecipesByCategory(string category)
        {
            var recipes = await _context.Recipes
                .Where(r => r.Category == category)
                .Select(r => new RecipeDto
                {
                    Id = r.Id,
                    Name = r.Name,
                    Description = r.Description,
                    Category = r.Category
                })
                .ToListAsync();

            return Ok(recipes);
        }

        [HttpGet("search")]
        public async Task<IActionResult> SearchRecipes([FromQuery] string query)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                return BadRequest(new { message = "Search query cannot be empty." });
            }

            var matchingRecipes = await _context.Recipes
                .Where(r => EF.Functions.Like(r.Name, $"%{query}%"))
                .Select(r => new
                {
                    r.Id,
                    r.Name,
                    r.Description,
                    r.Category
                })
                .ToListAsync();

            return Ok(matchingRecipes);
        }
        private int GetUserId()
        {
            var userIdClaim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            if (userIdClaim == null)
                throw new UnauthorizedAccessException("User ID not found in token.");

            return int.Parse(userIdClaim);
        }

        [HttpPost("{id}/complete")]
        public async Task<IActionResult> CompleteRecipe(int id)
        {
            var userId = GetUserId();

            var recipe = await _context.Recipes
                .Include(r => r.RecipeIngredients)
                .FirstOrDefaultAsync(r => r.Id == id);

            if (recipe == null)
                return NotFound(new { message = "Recipe not found." });

            var userIngredients = await _context.UserIngredients
                .Where(ui => ui.UserId == userId)
                .ToListAsync();

            foreach (var recipeIngredient in recipe.RecipeIngredients)
            {
                var userIngredient = userIngredients.FirstOrDefault(ui => ui.IngredientId == recipeIngredient.IngredientId);

                if (userIngredient != null)
                {
                    userIngredient.Quantity -= recipeIngredient.Quantity;

                    if (userIngredient.Quantity <= 0)
                    {
                        _context.UserIngredients.Remove(userIngredient);
                    }
                }     
            }

            await _context.SaveChangesAsync();

            return Ok(new { message = "Recipe completed and ingredients updated." });
        }


        [HttpGet("categories")]
        public async Task<IActionResult> GetRecipeCategories()
        {
            var categories = await _context.Recipes
                .Select(r => r.Category)
                .Distinct()
                .ToListAsync();

            return Ok(categories);
        }

        [HttpPost("filter")]
        public async Task<IActionResult> GetFilteredRecipes([FromBody] RecipeFilterDto filterDto)
        {
            var query = _context.Recipes.AsQueryable();

            if (!string.IsNullOrEmpty(filterDto.FilterByCategory))
            {
                query = query.Where(r => r.Category == filterDto.FilterByCategory);
            }

            if (!string.IsNullOrEmpty(filterDto.FilterByName))
            {
                query = query.Where(r => r.Name.Contains(filterDto.FilterByName));
            }

       
            var recipes = await query
                .Include(r => r.RecipeIngredients)
                .ToListAsync();

            if (filterDto.FilterByPossibility)
            {
                var userId = GetUserId();

                var userIngredients = await _context.UserIngredients
                    .Where(ui => ui.UserId == userId)
                    .ToListAsync();

                recipes = recipes.Where(recipe =>
                    recipe.RecipeIngredients.All(ri =>
                        userIngredients.Any(ui => ui.IngredientId == ri.IngredientId && ui.Quantity >= ri.Quantity)))
                    .ToList();
            }
 
            var result = recipes.Select(r => new RecipeDto
            {
                Id = r.Id,
                Name = r.Name,
                Description = r.Description,
                Category = r.Category
            }).ToList();

            return Ok(result);
        }


    }

}
