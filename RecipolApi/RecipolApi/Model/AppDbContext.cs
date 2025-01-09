using Microsoft.EntityFrameworkCore;
using System;

namespace RecipolApi.Model
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<UserIngredient> UserIngredients { get; set; }
        public DbSet<RecipeIngredient> RecipeIngredients { get; set; }
    }

}