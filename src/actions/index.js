export const receiveMessage = (msg) => {
  return {
    type: 'SUBMIT_BUTTON_CLICKED',
    payload: msg
  }
};
