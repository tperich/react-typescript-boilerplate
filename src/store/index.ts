import { createStore, applyMiddleware, Store, Middleware } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];
const store: Store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;
