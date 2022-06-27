import { configureStore } from "@reduxjs/toolkit";
import { headlinesReducer } from "./reducers/headlinesReducer";
import { useDispatch } from "react-redux";
import { statusReducer } from "./reducers/statusReducer";

const  store = configureStore({

    reducer:{
        headlines:headlinesReducer,
        status:statusReducer
    }
})

export default store
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>