import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice.js";
import contentReducer from "../features/content/contentSlice";
import playlistReducer from "../features/playlist/playlistSlice";
import orderReducer from "../features/order/orderSlice";
import alertReducer from "../features/alert/alertSlice";

const rootReducer = {
  post: postReducer,
  content: contentReducer,
  playlist: playlistReducer,
  order: orderReducer,
  alert: alertReducer,
};
const store = configureStore({ reducer: rootReducer });

export default store;
