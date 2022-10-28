const express = require('express');
require('dotenv').config();
const moment = require('moment');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: process.env.LOCAL_URL,
    methods: ['GET', 'POST'],
  },
});

const { saveMessage, getAllMessages } = require('./models/messagesModel');

function nickName(length) {
  let nickname = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i += 1) {
    nickname += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return nickname;
}

const allMessages = async () => {
  const msgs = await getAllMessages();
  return msgs.map((msg) => `${msg.timestamp} ${msg.nickname} ${msg.message}`);
};

const newMessage = async (nickname, chatMessage) => {
  const timestamp = moment().format('DD-MM-yyyy HH:mm:ss');
  const message = `${timestamp} ${nickname} ${chatMessage}`;
  await saveMessage({
    message: chatMessage,
    nickname,
    timestamp,
  });
  return message;
};

let users = [];

const updateUser = (id, nickname) => {
 users = users.map((user) => {
  if (user.id === id) return { ...user, nickname };
  return user;
}); 
};

io.on('connection', async (socket) => {
  users.push({ nickname: nickName(16), id: socket.id });
  
  io.emit('userList', users);
  
  io.emit('messages', await allMessages());
  
  socket.on('message', async ({ nickname, chatMessage }) => {
    const message = await newMessage(nickname, chatMessage);
    io.emit('message', message);
  });
  
  socket.on('userUpdate', (nickname) => {
    updateUser(socket.id, nickname);
    io.emit('userList', users);
  });

  socket.on('disconnect', () => {
    users = users.filter((user) => user.id !== socket.id);
    io.emit('userList', users);
  });
});

app.use(express.json());

app.use(express.static(`${__dirname}/public`));

const PORT = process.env.LOCAL_PORT || 3000;

http.listen(PORT, () => console.log('App listening on PORT %s ', PORT));
