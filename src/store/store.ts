import {configureStore} from "@reduxjs/toolkit";

import chatReducer from "./chatSlice";
import sidebarReducer from "./sidebarSlice";

const store = configureStore({
    reducer: {
        chat: chatReducer,
        sidebar: sidebarReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
