using Microsoft.AspNetCore.SignalR;

namespace ServiceX.Web.Hubs;

public class ViewHub : Hub
{
    public static int ViewCount { get; private set; } = 0;
    public async Task NotifyWatching()
    {
        ViewCount++;
        await Clients.All.SendAsync("ViewCountUpdate", ViewCount);
    }
}
