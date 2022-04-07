import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { middlewares } from "./middleware";
import { rootReducer } from "./rootReducer";

export const configureStore = () => {
  const enhancer = composeWithDevTools({ trace: true, traceLimit: 25 });

  const store = createStore(
    rootReducer,
    enhancer(applyMiddleware(...middlewares))
  );

  //   watchers.forEach((watcher) => middlewareSaga.run(watcher));

  //@ts-ignore
  return store;
};