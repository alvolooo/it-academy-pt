import { combineReducers } from "@reduxjs/toolkit";
import { authReducer as auth } from "./reducers";
import { certReducer as cert } from "./reducers/certReducer";
import { isShowReducer as isShow } from "./reducers/isShowReducer";
import { courseReducer as course } from "./reducers/coursesReducer";

export const rootReducer = combineReducers({ auth, cert, isShow, course });

export type RootState = ReturnType<typeof rootReducer>;
