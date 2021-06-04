import { combineReducers } from "redux";
import { galleryReducer } from "./galleryReducer";

export const rootReducer = combineReducers({
    galleries: galleryReducer,

})