using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipolApi.DTOs;
using RecipolApi.Model;

namespace RecipolApi.Controllers
{
    [ApiController]
    [Route("api/user/ingredients")]
    [Authorize]
    public class UserIngredientController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserIngredientController(AppDbContext context)
        {
            _context = context;
        }

        private int GetUserId()
        {
            var userIdClaim = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            if (userIdClaim == null)
                throw new UnauthorizedAccessException("User ID not found in token.");

            return int.Parse(userIdClaim);
        }

        [HttpGet]
        public async Task<IActionResult> GetUserIngredients()
        {
            var userId = GetUserId();

            var userIngredients = await _context.UserIngredients
                .Where(ui => ui.UserId == userId)
                .Include(ui => ui.Ingredient)
                .Select(ui => new UserIngredientDto
                {
                    IngredientId = ui.IngredientId,
                    Name = ui.Ingredient.Name,
                    Category = ui.Ingredient.Category,
                    Unit = ui.Ingredient.Unit,
                    Quantity = (double)ui.Quantity
                })
                .ToListAsync();

            return Ok(userIngredients);
        }

        [HttpPost]
        public async Task<IActionResult> AddOrUpdateUserIngredient([FromBody] UserIngredientDto userIngredientDto)
        {
            var userId = GetUserId();

         
            var existingIngredient = await _context.UserIngredients
                .FirstOrDefaultAsync(ui => ui.UserId == userId && ui.IngredientId == userIngredientDto.IngredientId);

            if (existingIngredient != null)
            {
                
                existingIngredient.Quantity += (decimal)userIngredientDto.Quantity;
            }
            else
            {
               
                var newUserIngredient = new UserIngredient
                {
                    UserId = userId,
                    IngredientId = userIngredientDto.IngredientId,
                    Quantity = (decimal)userIngredientDto.Quantity
                };

                _context.UserIngredients.Add(newUserIngredient);
            }

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Ingredient added or updated successfully.",
                ingredientId = userIngredientDto.IngredientId,
                quantity = userIngredientDto.Quantity
            });
        }


        [HttpPut("{ingredientId}")]
        public async Task<IActionResult> UpdateUserIngredient(int ingredientId, [FromBody] double quantity)
        {
            var userId = GetUserId();

            var existingIngredient = await _context.UserIngredients
                .FirstOrDefaultAsync(ui => ui.UserId == userId && ui.IngredientId == ingredientId);

            if (existingIngredient == null) return NotFound();

            existingIngredient.Quantity = (decimal)quantity;
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{ingredientId}")]
        public async Task<IActionResult> DeleteUserIngredient(int ingredientId)
        {
            var userId = GetUserId();

            var ingredient = await _context.UserIngredients
                .FirstOrDefaultAsync(ui => ui.UserId == userId && ui.IngredientId == ingredientId);

            if (ingredient == null) return NotFound();

            _context.UserIngredients.Remove(ingredient);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
