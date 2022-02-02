import { SagaIterator } from "redux-saga";
import { all, takeLatest } from "redux-saga/effects";
import { authTypes } from "../actionTypes";

export default function* rootSaga(): SagaIterator {
  yield all([
    // takeLatest(authTypes.login,)
  ]);
}
