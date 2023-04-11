import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPokeInfo } from './pokecardAPI';
import axios from 'axios';

const initialState = {
pokecard: {
    id: 1,
    name: "",
    base_experience: 0,
    height: 0,
    is_default: true,
    order: 0,
    weight: 0,
    sprites: {
      front_default: ''
    }
},
status: false,
};

export const pokeInfoAsync = createAsyncThunk(
    'pokecard/fetchPokeInfo',
    async (id) => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return response.data;
    }
  );

export const pokeCardSlice = createSlice({
  name: 'pokecard',
  initialState,
  reducers : {
    advance: (state) => {
      state.id += 1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(pokeInfoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(pokeInfoAsync.fulfilled, (state, action) => {
        state.status   = 'succeeded';
        state.pokecard = action.payload;
      });
  },
})

export const { advance } = pokeCardSlice.actions;

export const selectPokemon = (state) => state.pokecard;

export default pokeCardSlice.reducer;