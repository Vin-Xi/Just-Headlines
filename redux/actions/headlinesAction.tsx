import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const actionTypes={
    GET_HEADLINES:"news/getHeadlines"
};

const url = 'https://newsapi.org/v2/top-headlines?category=technology&language=en'

export const fetchHeadlines = createAsyncThunk(actionTypes.GET_HEADLINES,async (payload,{rejectWithValue})=>{
    const response= await axios({
        method:'GET',
        url:url,
        headers:{
           'X-Api-key':'275d6910dccc45e09b043f65e5a14c52' 
        }
    })
    return response.data['articles']  
    
})

