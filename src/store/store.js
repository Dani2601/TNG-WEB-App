import { configureStore } from "@reduxjs/toolkit";
import reducer from "./action";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "persist-key",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: {
    record: persistedReducer,
  },
});

const persistor = persistStore(store);

export { persistor };
export default store;
