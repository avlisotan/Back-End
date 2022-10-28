const connection = require('./connection');

const saveMessage = async (message) => {
  const db = await connection();
  await db.collection('messages').insertOne(message);
};

const getAllMessages = async () => {
  const db = await connection();
  const messages = await db.collection('messages').find().toArray();
  return messages;
}; 

module.exports = {
  saveMessage,
  getAllMessages,
};