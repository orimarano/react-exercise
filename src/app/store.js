import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pokecardReducer from '../features/pokecard/pokecardSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokecard: pokecardReducer
  },
});
