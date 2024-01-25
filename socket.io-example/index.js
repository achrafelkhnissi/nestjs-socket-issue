const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: true,
});

io.on("connection", (socket) => {
  socket.on("string", (data, callback) => {
    callback("string sent");
  });

  socket.on("json", (data, callback) => {
    callback({ message: "json sent" });
  });
});

httpServer.listen(3002);
