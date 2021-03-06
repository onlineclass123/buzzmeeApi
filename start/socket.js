'use strict'


// /*
// |--------------------------------------------------------------------------
// | Websocket
// |--------------------------------------------------------------------------
// |
// | This file is used to register websocket channels and start the Ws server.
// | Learn more about same in the official documentation.
// | https://adonisjs.com/docs/websocket
// |
// | For middleware, do check `wsKernel.js` file.
// |
// */

const Ws = use('Ws')

// Ws.channel('room:public', ({ socket }) => {
//   console.log('user joined with %s socket id', socket.id)
// })

// Ws.channel('chat', 'ChatController', ({ socket}) => {
//   console.log('user joined chat', socket.id)
//   socket.broadcastToAll('message', 'New user joined chat')
// })

Ws.channel('room:chat', ({ socket}) => {
  // console.log('user joined chat', socket.id)
  socket.broadcastToAll('message', 'New user joined Buzz chat')
  // onMessage (message) {
  //   console.log('Onmessage chat ', message)
  //   this.socket.broadcastToAll('message', message)
  // }
  // console.log('sending broadcast')
  // setTimeout(() => {
  //   // topic.broadcastToAll(`message`,
  //   // 'notification');

  // }, 4000)
  socket.broadcastToAll('message', 'New user joined chat again')
   socket.on('message', (message) => {
      console.log('Onmessage chat ', message)
      socket.broadcastToAll('message', message)
    })

    socket.on('sendMessage', (message) => {
      console.log('new chat ', message)
      socket.broadcastToAll('receiveMessage', message)
    })
  // const channel = Ws.getChannel('room:chat')
  // console.log('channel ', channel)
  // if (!channel) return

  // const topic = channel.topic(`room:chat`)
  // console.log('topic ', topic)
  // if (!topic) {
  //   console.error('Has no topic')
  //   return
  // }

  // // emit, broadcast, broadcastToAll
  // topic.broadcastToAll(`message`,
  // 'notification');
  // setTimeout(() => {
  //   topic.broadcastToAll(`message`,
  //   'notification');
  // // socket.broadcastToAll('message', 'New user joined chat')
  // console.log('sending broadcast')
  // }, 4000)
})
// Ws.channel('room:chat', 'ChatController')

// const Server = use('Server')
// const io = use('socket.io')(Server.getInstance())
// console.log('starting server')
// io.on('connection', function (socket) {
//   console.log(socket.id)
// })



// socket.io config

// var options = {
//   allowUpgrades: false,
//   transports: [ 'polling', 'websocket' ],
//   pingTimeout: 9000,
//   pingInterval: 3000,
//   cookie: 'mycookie',
//   httpCompression: true,
//   origins: '*:*'
// };
// const io = require('socket.io')(options);
// // io.set('transports', ['websocket']);
// console.log('starting new server')
// io.on('connection', socket => {
//   console.log('socket id: ', socket.id)
//   setInterval(() => {
//     io.sockets.emit('intervalMessage', Date.now());
//   }, 1000)
//   // socket.on('message', function (data) {
//   //     console.log('message ', data);
//   //     // socket.join('chatMessageRoom')
//   //     // console.log('joined  room', io.sockets);
//   //   });
//   io.on('sendMessage', function (data) {
//     console.log('message ', data);
//     // console.log('existing room', io.sockets);
//     io.sockets.emit('receiveMessage', data);
//     // io.in(chatMessageRoom).emit('newChatMessage', data);
//   });
  
// });

// // io.on('msg', client => {
// //   console.log(client.id)
// //   io.emit('this', { will: 'be received by everyone'});
// // });
// io.listen(3333);

// // native websocket
// const WebSocket = require('ws')

// const wss = new WebSocket.Server({ noServer: true , path: "/websocket"})
// console.log('connecting to websocket')
// wss.on('connection', ws => {
//   console.log('socket connected')
//   ws.on('message', message => {
//     console.log(`Received message => ${message}`)
//   })
//   ws.send('ho!')
// })