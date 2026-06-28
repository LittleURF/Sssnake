using Sssnake.Domain.Highscores.Domain;

namespace Sssnake.Domain.Highscores.Services;

public interface IHighscoreService
{
    Task<IReadOnlyList<HighscoreEntry>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<HighscoreEntry> AddAsync(int score, CancellationToken cancellationToken = default);
}
