import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themeSlice";
import languageSlice from "./features/languageSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        language: languageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store