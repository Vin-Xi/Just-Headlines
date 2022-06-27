import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {fetchHeadlines} from '../actions/headlinesAction';

interface IHeadlineState {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

interface IInitialState {
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
