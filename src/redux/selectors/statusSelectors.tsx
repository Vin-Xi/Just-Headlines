import { RootState } from "../store"


export const isLoading= (state:RootState)=>{
    return  (state.status[state.status.requestId]==='Loading');  
}
