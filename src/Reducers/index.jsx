import { reducerConstants } from "../Action";

export const initialState = {
  token: null,
};

const reducer = (state = initialState, action) => {
  //console.log(action);
  switch (action.type) {
    case reducerConstants.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
