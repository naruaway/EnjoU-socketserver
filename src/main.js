const app = require('http').createServer(handler)
const io = require('socket.io')(app)
const fs = require('fs')

app.listen(8080)

function handler(req, res) {}

io.on('connection', function (tocket) {
  socket.on('post message', function (text) {
    socket.emit('new text', {text})
    socket.broadcast.emit('new text', {text})
  })
})
