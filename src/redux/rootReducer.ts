import { combineReducers } from "@reduxjs/toolkit";
import { authReducer as auth } from "./reducers";
import { certReducer as cert } from "./reducers/certReducer";

export const rootReducer = combineReducers({ auth, cert });

//export type RootState = ReturnType<typeof rootReducer>;
