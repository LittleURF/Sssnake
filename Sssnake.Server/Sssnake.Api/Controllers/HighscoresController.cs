using Microsoft.AspNetCore.Mvc;
using Sssnake.Api.Dtos;
using Sssnake.Domain.Highscores.Services;

namespace Sssnake.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class HighscoresController(HighscoreService highscoreService) : ControllerBase
{
    [HttpGet]
    [ProducesResponseType<HighscoreResponse>(StatusCodes.Status200OK)]
    public async Task<IActionResult> GetAll(CancellationToken cancellationToken)
    {
        var entries = await highscoreService.GetAllAsync(cancellationToken);
        var response = new HighscoreResponse(entries
            .OrderByDescending(e => e.Score)
            .Select(e => new HighscoreEntryDto(e.Id, e.Score, e.RecordedAt))
            .ToList());

        return Ok(response);
    }

    [HttpPost]
    [ProducesResponseType<HighscoreEntryDto>(StatusCodes.Status201Created)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status400BadRequest)]
    public async Task<IActionResult> Add([FromBody] AddHighscoreRequest request, CancellationToken cancellationToken)
    {
        var entry = await highscoreService.AddAsync(request.Score, cancellationToken);
        return CreatedAtAction(nameof(GetAll), new HighscoreEntryDto(entry.Id, entry.Score, entry.RecordedAt));
    }
}
