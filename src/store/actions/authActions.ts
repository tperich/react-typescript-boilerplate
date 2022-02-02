import { authTypes } from "../actionTypes";
import { User } from "../../types/entities";
import { UserCredentials } from "../../types";

export interface LoginAction {
  type: authTypes.login;
  payload: UserCredentials;
}
export const login = (email: string, password: string): LoginAction => ({
  type: authTypes.login,
  payload: { email, password },
});

export interface SetUserAction {
  type: authTypes.setUser;
  payload: User;
}
export const setUser = (user: User): SetUserAction => ({
  type: authTypes.setUser,
  payload: user,
});

export type AuthActions = LoginAction | SetUserAction;
