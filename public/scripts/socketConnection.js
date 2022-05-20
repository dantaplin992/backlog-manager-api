const { process_params } = require('express/lib/router')
const NewsFeed = require('../../models/news-feed')

function addNewsFeedItem(params, action) {
  const newFeedItem = new NewsFeed({
    userId: params.userId,
    username: params.username,
    action: action,
    gameTitle: params.game.name,
    review: params.review,
  }).save().then((res) => {
    console.log(res)
  })
}

function updateLikes(params) {
  
}

function chat(io) {
  io.on('connection', (socket) => {
    console.log(`socket connected with id ${socket.id}`)
    socket.emit('handshake', 'hello client')

    socket.on('addedGame', (params) => {
      console.log(params)
      addNewsFeedItem(params, "add")
      io.to('newsFeed').emit('refreshFeedItems', params)
    })

    socket.on('startedPlaying', (params) => {
      console.log(params)
      addNewsFeedItem(params, "start")
      io.to('newsFeed').emit('refreshFeedItems', params)
    })

    socket.on('abandonedGame', (params) => {
      console.log(params)
      addNewsFeedItem(params, "abandon")
      io.to('newsFeed').emit('refreshFeedItems', params)
    })

    socket.on('review', (params) => {
      console.log(params)
      addNewsFeedItem(params, "review")
      io.to('newsFeed').emit('refreshFeedItems', params)
    })

    socket.on('addLike', (params) => {
      NewsFeed.updateOne(
        { _id: params.itemId },
        { $push: { likes: params.username } }
      ).then((res) => {
        console.log(res)
      })
      io.to('newsFeed').emit('refreshFeedItems', params)
    })

    socket.on('removeLike', (params) => {
      NewsFeed.updateOne(
        { _id: params.itemId },
        { $pull: { likes: params.username } }
      ).then((res) => {
        console.log(res)
      })
      io.to('newsFeed').emit('refreshFeedItems', params)
    })
    
    socket.on('joinNewsFeed', () => {
      console.log('joining news feed room')
      socket.join('newsFeed')
    })
    
    socket.on('leaveNewsFeed', () => {
      console.log('leaving news feed room')
      socket.leave('newsFeed')
    })

    socket.on('disconnect', () => {
      console.log(`socket ${socket.id} disconnected`)
    })
  })
}

module.exports = chat
