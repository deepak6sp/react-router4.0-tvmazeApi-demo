export default function(state = [], action) {
  console.log('action received', action);
  switch(action.type) {
    case "SUBMIT_BUTTON_CLICKED":
                return action.payload;
                break;
  }
  return state;
}
