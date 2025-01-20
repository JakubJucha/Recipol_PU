namespace RecipolApi.DTOs
{
    public class RecipeIngredientDto
    {
        public int IngredientId { get; set; }
        public string Name { get; set; }
        public string Unit { get; set; }
        public double Quantity { get; set; }
    }
}
