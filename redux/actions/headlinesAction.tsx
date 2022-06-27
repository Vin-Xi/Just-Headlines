import { AsyncThunkPayloadCreator, AsyncThunkPayloadCreatorReturnValue, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const actionTypes={
    GET_HEADLINES:"news/getHeadlines"
};

const url = 'https://newsapi.org/v2/top-headlines?language=en&category='

export const fetchHeadlines = createAsyncThunk(actionTypes.GET_HEADLINES,
    async (selectedCategory:string,{rejectWithValue})=>{
    
    const response= await axios({
        method:'GET',
        url:url+selectedCategory,
        headers:{
           'X-Api-key':'275d6910dccc45e09b043f65e5a14c52' 
        }
    })
    return response.data['articles']  
    
})

