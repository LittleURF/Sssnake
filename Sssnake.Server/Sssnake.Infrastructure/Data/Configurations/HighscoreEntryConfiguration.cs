using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Sssnake.Domain.Highscores.Domain;

namespace Sssnake.Infrastructure.Data.Configurations;

public sealed class HighscoreEntryConfiguration : IEntityTypeConfiguration<HighscoreEntry>
{
    public void Configure(EntityTypeBuilder<HighscoreEntry> builder)
    {
        builder.ToTable("Highscores");

        builder.HasKey(e => e.Id);

        builder.Property(e => e.Id)
            .ValueGeneratedNever();

        builder.Property(e => e.Score)
            .IsRequired();

        builder.Property(e => e.RecordedAt)
            .IsRequired();
    }
}
