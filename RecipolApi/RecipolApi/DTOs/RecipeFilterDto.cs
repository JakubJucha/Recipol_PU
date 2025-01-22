namespace RecipolApi.DTOs
{
    public class RecipeFilterDto
    {
        public string? FilterByCategory { get; set; }
        public string? FilterByName { get; set; }
        public bool FilterByPossibility { get; set; }
    }
}
