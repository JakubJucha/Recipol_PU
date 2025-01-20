using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RecipolApi.DTOs;
using RecipolApi.Model;

namespace RecipolApi.Controllers
{
    [ApiController]
    [Route("api/ingredients")]
    public class IngredientController : ControllerBase
    {
        private readonly AppDbContext _context;

        public IngredientController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllIngredients()
        {
            var ingredients = await _context.Ingredients
                .Select(i => new IngredientDto
                {
                    Id = i.Id,
                    Name = i.Name,
                    Category = i.Category,
                    Unit = i.Unit
                })
                .ToListAsync();

            return Ok(ingredients);
        }

        [HttpGet("category/{category}")]
        public async Task<IActionResult> GetIngredientsByCategory(string category)
        {
            var ingredients = await _context.Ingredients
                .Where(i => i.Category == category)
                .Select(i => new IngredientDto
                {
                    Id = i.Id,
                    Name = i.Name,
                    Category = i.Category,
                    Unit = i.Unit
                })
                .ToListAsync();

            return Ok(ingredients);
        }
    }

}
