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


        [HttpGet("filter")]
        public async Task<IActionResult> GetRecipesByIngredients([FromQuery] List<int> ingredientIds)
        {
            var recipes = await _context.Recipes
                .Where(r => r.RecipeIngredients.Any(ri => ingredientIds.Contains(ri.IngredientId)))
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
    }

}
