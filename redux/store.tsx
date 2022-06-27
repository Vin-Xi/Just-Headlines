import {configureStore} from '@reduxjs/toolkit';
import {headlinesReducer, IInitialState} from './reducers/headlinesReducer';
import {useDispatch} from 'react-redux';
import {statusReducer} from './reducers/statusReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['headlines'],
};

export const store = configureStore({
  reducer: {
    headlines: persistReducer<IInitialState>(persistConfig, headlinesReducer),
    status: statusReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;
