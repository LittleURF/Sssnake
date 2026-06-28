using Microsoft.EntityFrameworkCore;
using Sssnake.Domain.Highscores.Domain;
using Sssnake.Domain.Highscores.Repositories;
using Sssnake.Infrastructure.Data;

namespace Sssnake.Infrastructure.Repositories;

public sealed class HighscoreRepository(AppDbContext dbContext) : IHighscoreRepository
{
    public async Task<IReadOnlyList<HighscoreEntry>> GetAllAsync(CancellationToken cancellationToken = default)
        => await dbContext.Highscores.AsNoTracking().ToListAsync(cancellationToken);

    public async Task AddAsync(HighscoreEntry entry, CancellationToken cancellationToken = default)
    {
        await dbContext.Highscores.AddAsync(entry, cancellationToken);
        await dbContext.SaveChangesAsync(cancellationToken);
    }
}
