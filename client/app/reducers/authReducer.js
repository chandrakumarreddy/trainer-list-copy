import { SET_CURRENT_USER } from "../types";
import isEmpty from "../validations/is-empty";

const initialState = {
  user: {},
  isAuthenticated: false,
  authenticateSubAdmin: false
};

const authReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case "SET_CURRENT_SUB_USER":
      return {
        ...state,
        authenticateSubAdmin: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
