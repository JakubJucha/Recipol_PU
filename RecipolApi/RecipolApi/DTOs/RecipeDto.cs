namespace RecipolApi.DTOs
{
    public class RecipeDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string? Photo { get; set; }
        public string? CookingTime { get; set; } 
        public string? Servings { get; set; } 
    }

}
