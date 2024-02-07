import * as signalR from "../lib/microsoft/signalr/dist/browser/signalr";

let connection = new signalR.HubConnectionBuilder().withUrl("/hubs/view").build();

connection.on("ReceiveMessage", (user, message) => {
    console.log(`Received message from ${user}: ${message}`);
});

function notify() {
    connection.send("NotifyWatching");
}

function startSuccess() {
    console.log("Connection started");
    notify();
}

function startFail(err) {
    console.error(err.toString());
}

connection.on("ViewCountUpdate", (viewCount: number) => {
    var counter = document.getElementById("viewCount");
    counter.innerText = viewCount.toString();
})

connection.start().then(startSuccess, startFail);