import io from 'socket.io-client';

export const submitForm = (msg) => {
  this.socket = io.connect('http://localhost:3000');
  this.socket.on('connection');
  this.socket.emit("send message", { sendMsg : msg});
  console.log("you have submited form with ", msg);
  return {
    type: 'SUBMIT_BUTTON_CLICKED',
    payload: msg
  }
};
