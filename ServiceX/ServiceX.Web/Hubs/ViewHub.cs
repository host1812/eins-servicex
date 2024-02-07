using Microsoft.AspNetCore.SignalR;

namespace ServiceX.Web.Hubs;

public class ViewHub : Hub
{
    private ILogger<ViewHub> _logger;

    public ViewHub(ILogger<ViewHub> logger)
    {
        _logger = logger;
    }

    public static int ViewCount { get; private set; } = 0;
    public async Task NotifyWatching()
    {
        _logger.LogInformation($"View Count Updated: {ViewCount}");
        ViewCount++;
        await Clients.All.SendAsync("ViewCountUpdate", ViewCount);
    }
}
