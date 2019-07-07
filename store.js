import { createStore, applyMiddleware } from "redux";

import sagaMiddleware, { runSagas } from "./sagas";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
runSagas();

export default store;
