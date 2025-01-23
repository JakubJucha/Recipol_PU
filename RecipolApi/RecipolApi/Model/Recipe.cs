using System.ComponentModel.DataAnnotations;

namespace RecipolApi.Model
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Instructions { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;

        public string? Photo { get; set; }
        public string? CookingTime { get; set; } 
        public string? Servings { get; set; } 

        public ICollection<RecipeIngredient> RecipeIngredients { get; set; } = new List<RecipeIngredient>();
    }
}
