using Microsoft.EntityFrameworkCore;
using Sssnake.Api.Infrastructure;
using Sssnake.Domain.Highscores.Repositories;
using Sssnake.Domain.Highscores.Services;
using Sssnake.Infrastructure.Data;
using Sssnake.Infrastructure.Repositories;

namespace Sssnake.Api
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddOpenApi();
            builder.Services.AddProblemDetails();
            builder.Services.AddExceptionHandler<GlobalExceptionHandler>();

            var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
                ?? throw new InvalidOperationException(
                    "Connection string 'DefaultConnection' is not configured. " +
                    "Set it via user secrets (development) or the CONNECTIONSTRINGS__DEFAULTCONNECTION environment variable (production).");

            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseSqlServer(connectionString));

            builder.Services.AddScoped<IHighscoreRepository, HighscoreRepository>();
            builder.Services.AddScoped<IHighscoreService, HighscoreService>();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }

            app.UseExceptionHandler();
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();

            app.Run();
        }
    }
}
