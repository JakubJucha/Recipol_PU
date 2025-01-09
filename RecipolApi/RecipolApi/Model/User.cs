using System.ComponentModel.DataAnnotations;

namespace RecipolApi.Model
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Surname { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public bool Admin { get; set; }

        public ICollection<UserIngredient> UserIngredients { get; set; } = new List<UserIngredient>();
    }
}

