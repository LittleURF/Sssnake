using Sssnake.Domain.Highscores.Domain;

namespace Sssnake.Domain.Highscores.Repositories;

public interface IHighscoreRepository
{
    Task<IReadOnlyList<HighscoreEntry>> GetAllAsync(CancellationToken cancellationToken = default);
    Task AddAsync(HighscoreEntry entry, CancellationToken cancellationToken = default);
}
