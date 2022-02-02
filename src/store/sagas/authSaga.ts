import { SagaIterator } from "redux-saga";
import { select, call, put } from "redux-saga/effects";

import { LoginAction } from "../actions/authActions";

export function* login(action: LoginAction): SagaIterator {
  const { email, password } = action.payload;
  // yield call(AuthService.login, email, password);
}
