const initialState = {
  count: 0,
  color: "black",
};
export default function CountReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
        color: (state.color = action.color),
      };
    case "DECREMENT":
      if (state.count == 0) {
        return {
          count: 0,
          color: (state.color = action.color),
        };
      } else {
        return {
          count: state.count - action.payload,
          color: (state.color = action.color),
        };
      }
    case "RESET":
      return {
        count: (state.count = 0),
        color: (state.color = action.color),
      };
    case "ChangeColor":
      return {
        color: (state.color = action.color),
        count:state.count
      };
    default:
      return state;
  }
}
