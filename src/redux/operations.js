import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://663d2e8117145c4d8c38f05c.mockapi.io';

export const fetchCampers = createAsyncThunk('campers', async (_, thunkAPI) => {
  try {
    const params = new URLSearchParams({
      page: 1,
      limit: 4,
    });
    const response = await axios.get(`/campers/?${params}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchLoadMore = createAsyncThunk(
  'fetchLoadMore',
  async (page, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        page: page,
        limit: 4,
      });
      const response = await axios.get(`/campers/?${params}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchFavoritesCampers = createAsyncThunk(
//   'campers',
//   async ({}, thunkAPI) => {
//     try {
//       const params = new URLSearchParams({
//         _id: 1,
//       });
//       const response = await axios.get(`/campers/?${params}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
