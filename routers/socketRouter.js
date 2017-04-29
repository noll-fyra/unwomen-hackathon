// listen for connections and route orders
// const User = require('../models/user')
// const Condition = require('../models/condition')

module.exports = function (socket) {
  // sockets join their own room by id
  socket.on('seek', (room) => {
    console.log('socket joining ' + room)
    socket.roomID = room
    socket.join(room)
    io.emit('advice', room)
  })
// medpros join the in-need party's room
  socket.on('give', (room) => {
    console.log('socket joining ' + room)
    socket.join(room)
  })

  // redirect chat messages to the people in the room
  socket.on('chat message', (data) => {
        io.sockets.in(data.room).emit('chat message', data.message)
  })

  socket.on('disconnect', function() {
    var room = socket.roomID
    io.emit('left', room)
    console.log('leaving ' + room)
    io.sockets.in(room).emit('chat message', 'The user has left')
  })

  // medpros join the in-need party's room
    socket.on('left', (room) => {
      io.emit('remove', room)
    })
}
