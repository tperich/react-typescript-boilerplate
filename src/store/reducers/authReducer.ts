import { RootAction } from "../actions";
import { authTypes } from "../actionTypes";
import { User } from "../../types/entities";

export interface AuthState {
  user: User;
}

const initialState = {
  user: {
    id: 0,
    email: "",
  },
};

export const authReducer = (state: AuthState = initialState, action: RootAction): AuthState => {
  switch (action.type) {
    case authTypes.setUser:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
