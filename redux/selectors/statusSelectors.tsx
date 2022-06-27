import { RotateTransform } from "react-native"
import { RootState } from "../store"


export const isSuccess= (state:RootState)=>{
    return  (state.status[state.status.requestId]=='Success'? true:false);  
}
