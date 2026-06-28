using Sssnake.Domain.Exceptions;

namespace Sssnake.Domain.Highscores.Domain;

public sealed class HighscoreEntry
{
    public Guid Id { get; }
    public int Score { get; }
    public DateTime RecordedAt { get; }

    private HighscoreEntry(Guid id, int score, DateTime recordedAt)
    {
        Id = id;
        Score = score;
        RecordedAt = recordedAt;
    }

    public static HighscoreEntry Create(int score)
    {
        if (score < 0)
            throw new DomainException("Score must be non-negative.");

        return new HighscoreEntry(Guid.NewGuid(), score, DateTime.UtcNow);
    }

    // Reconstitution from persistence
    public static HighscoreEntry Reconstitute(Guid id, int score, DateTime recordedAt)
        => new(id, score, recordedAt);
}
