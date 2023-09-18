using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Pronunciapp.Data;
using System.Reflection;
using MudBlazor.Services;

namespace Pronunciapp
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                    fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
                })
                .Configuration.AddJsonFile(new EmbeddedFileProvider(typeof(App).GetTypeInfo().Assembly), "appsettings.json", optional: false, false);

            builder.Services.AddMauiBlazorWebView();
            builder.Services.AddMudServices();

            var appData = builder.Configuration.GetSection("AppData").Get<AppData>();
            builder.Services.AddScoped(s => appData);

#if DEBUG
            builder.Services.AddBlazorWebViewDeveloperTools();
            builder.Logging.AddDebug();
#endif

            builder.Services.AddScoped<PronunciappLocalDatabase>();
            builder.Services.AddScoped<PracticeManager>();
            builder.Services.AddScoped<ScoreBoard>();

            builder.Services.AddSingleton<WeatherForecastService>();

            return builder.Build();
        }
    }
}