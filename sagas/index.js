import { topPostsSaga } from "./posts";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const runSagas = () => {
  sagaMiddleware.run(topPostsSaga);
};

export default sagaMiddleware;
