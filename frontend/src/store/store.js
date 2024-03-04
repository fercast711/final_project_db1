import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import userSlice from "./slice/userSlice";
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    whitelist: ["user"],
}
const combine = combineReducers({
    auth: authSlice,
    user: userSlice,
  })

const rootReducer = persistReducer(
    persistConfig,
    combine
  );

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
      }),
});

export const persistor = persistStore(store);
