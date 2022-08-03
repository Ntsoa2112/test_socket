const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: '*'
  }
});

app.get('/', (req, res) => {
  io.emit('mybroadcast', `MY_DATA`);
  res.send('<h1>Hey Socket.io</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected with token ');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

});

http.listen(3000, () => {
  console.log('listening on port 3000');
});
