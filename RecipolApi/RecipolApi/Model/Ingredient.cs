using System.ComponentModel.DataAnnotations;

namespace RecipolApi.Model
{
    public class Ingredient
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public string Unit { get; set; } = string.Empty; 

        public ICollection<RecipeIngredient> RecipeIngredients { get; set; } = new List<RecipeIngredient>();
        public ICollection<UserIngredient> UserIngredients { get; set; } = new List<UserIngredient>();
    }
}
