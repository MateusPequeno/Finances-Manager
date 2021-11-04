import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore , persistReducer} from 'redux-persist';
import rootReducer from "./reducers";

const persistConfig = {
  key : 'transactionRootKey',
  storage : AsyncStorage ,
}

const persistedReducer = persistReducer(persistConfig , rootReducer);


const middlewares = [thunk];


const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
const persistor = persistStore(store);

export  {store, persistor};
