export default function(state, action) {
  switch(action.type) {
    case "SUBMIT_BUTTON_CLICKED":
                return [...state, action.payload];
                break;
  }
  return [];
}
