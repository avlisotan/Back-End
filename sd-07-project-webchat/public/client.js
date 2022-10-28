const client = window.io();

const usersOnline = document.querySelector('#usersOnline');
const chatMessages = document.querySelector('#chatMessages');
const messageInput = document.querySelector('#messageInput');
const sendMessage = document.querySelector('#sendMessage');
const nicknameBtn = document.querySelector('#nicknameBtn');
const nicknameInput = document.querySelector('#nicknameInput');

const createLi = (data) => {
  const createElement = document.createElement('li');
  createElement.innerHTML = data;
  return createElement;
};

const listUsers = (users) => {
  const { nickname } = users.find((user) => user.id === client.id);
  const otherUsers = users.filter((user) => user.id !== client.id);
   return `<li id="mainUser" data-testid="online-user">${nickname}</li>${otherUsers.reduce(
    (acc, user) => `${acc}<li data-testid="online-user">${user.nickname}</li>`,
    '',
  )}`;
};

client.on('userList', (users) => {
  usersOnline.innerHTML = listUsers(users);
});

sendMessage.addEventListener('click', () => {
  const mainUser = document.querySelector('#mainUser');
  client.emit('message', { nickname: mainUser.innerText, chatMessage: messageInput.value });
  messageInput.value = '';
});

const createAtt = (att, value) => {
  const attribute = document.createAttribute(att);
  attribute.value = value;
  return attribute;
};

const createMessage = (message) => {
  const messageLi = createLi(message);
  messageLi.setAttributeNode(createAtt('data-testid', 'message'));
  chatMessages.appendChild(messageLi);
};

client.on('message', (message) => {
  createMessage(message);
});

client.on('messages', (msg) => {
  msg.forEach((e) => {
    createMessage(e);
  });
});

nicknameBtn.addEventListener('click', () => {
  client.emit('userUpdate', nicknameInput.value);
  nicknameInput.value = '';
});
