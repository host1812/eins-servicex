"use strict";

var connection = new signalR.HubConnectionBuilder()
  .configureLogging(signalR.LogLevel.None)
  .withUrl("/hubs/view")
  .build();

connection.on("ViewCountUpdate", (viewCount) => {
  console.log(viewCount);
  var counter = document.getElementById("viewCounter");
  counter.innerText = viewCount;
});

function notify() {
  connection.send("NotifyWatching");
}

function startSuccess() {
  console.log("Connected to hub");
  notify();
}

function startFail() {
  console.log("Failed to connect to hub");
}

connection.start().then(startSuccess, startFail);
