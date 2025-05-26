import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/slice/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})