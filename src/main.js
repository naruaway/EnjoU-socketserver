import http from 'http'
import socketIO from 'socket.io'
import _ from 'lodash'

function getSingleKey(obj) {
  return _.keys(obj)[0]
}

const app =  http.createServer()
const io = socketIO(app)

app.listen(8080)

io.on('connection', (socket) => {
  socket.on('join room', (roomId) => {
    _(socket.rooms).forEach(roomId => {
      socket.leave(roomId)
    })
    socket.join(roomId)
  })

  socket.on('leave room', (roomId) => {
    socket.leave(roomId)
  })

  socket.on('post message', (text) => {
    const obj = {text}
    io.to(getSingleKey(socket.rooms)).emit('new text', obj)
  })
})
