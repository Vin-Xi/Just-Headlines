import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {fetchHeadlines} from '../actions/headlinesAction';

export interface IHeadlineState {
  [key: string]: string;
}

export interface IInitialState {
  headlines: IHeadlineState[];
}

const initialState: IInitialState = {
  headlines: [
    {
      title: '',
      description: '',
      url: '',
      urlToImage: '',
      publishedAt: '',
    },
  ],
};

export const headlinesReducer = createReducer(initialState, builder => {
  builder.addCase(fetchHeadlines.fulfilled, (state, action) => {
    state.headlines = action.payload;
  });
});
