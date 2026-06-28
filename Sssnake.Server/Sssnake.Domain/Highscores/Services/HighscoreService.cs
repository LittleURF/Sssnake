using Sssnake.Domain.Highscores.Domain;
using Sssnake.Domain.Highscores.Repositories;

namespace Sssnake.Domain.Highscores.Services;

public sealed class HighscoreService(IHighscoreRepository repository)
{
    public Task<IReadOnlyList<HighscoreEntry>> GetAllAsync(CancellationToken cancellationToken = default)
        => repository.GetAllAsync(cancellationToken);

    public async Task<HighscoreEntry> AddAsync(int score, CancellationToken cancellationToken = default)
    {
        var entry = HighscoreEntry.Create(score);
        await repository.AddAsync(entry, cancellationToken);
        return entry;
    }
}
