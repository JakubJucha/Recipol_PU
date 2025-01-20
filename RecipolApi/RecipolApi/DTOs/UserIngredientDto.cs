namespace RecipolApi.DTOs
{
    public class UserIngredientDto
    {
        public int IngredientId { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public string Unit { get; set; }
        public double Quantity { get; set; }
    }
}
