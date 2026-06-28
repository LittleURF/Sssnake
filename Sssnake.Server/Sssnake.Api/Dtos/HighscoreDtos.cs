namespace Sssnake.Api.Dtos;

public sealed record HighscoreEntryDto(Guid Id, int Score, DateTime RecordedAt);

public sealed record HighscoreResponse(IReadOnlyList<HighscoreEntryDto> Entries);

public sealed record AddHighscoreRequest(int Score);
