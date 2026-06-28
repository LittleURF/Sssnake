using Microsoft.EntityFrameworkCore;
using Sssnake.Domain.Highscores.Domain;
using Sssnake.Infrastructure.Data.Configurations;

namespace Sssnake.Infrastructure.Data;

public sealed class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<HighscoreEntry> Highscores => Set<HighscoreEntry>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new HighscoreEntryConfiguration());
    }
}
