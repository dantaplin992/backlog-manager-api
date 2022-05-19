const NewsFeed = require('../../models/news-feed')

function chat(io) {
  io.on('connection', (socket) => {
    console.log(`socket connected with id ${socket.id}`)
    socket.emit('handshake', 'hello client')

    socket.on('addedGame', (params) => {
      console.log(params)
      const newFeedItem = new NewsFeed({
        userId: params.userId,
        username: params.username,
        action: "add",
        gameTitle: params.game.name
      }).save().then(() => {
        io.to('newsFeed').emit('refreshFeedItems', params)
      })
    })

    socket.on('disconnect', () => {
      console.log(`socket ${socket.id} disconnected`)
    })

    socket.on('joinNewsFeed', () => {
      console.log('joining news feed room')
      socket.join('newsFeed')
    })

    socket.on('leaveNewsFeed', () => {
      console.log('leaving news feed room')
      socket.leave('newsFeed')
    })
  })
}

module.exports = chat
