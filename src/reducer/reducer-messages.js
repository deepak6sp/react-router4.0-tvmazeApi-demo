export default function(state, action) {
  // return ["sam", "ram"]
  switch(action.type) {
    case "SUBMIT_BUTTON_CLICKED":
                return [...state,action.payload];
                break;
  }
  return [];
}
