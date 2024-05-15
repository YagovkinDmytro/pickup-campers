import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://663d2e8117145c4d8c38f05c.mockapi.io';

export const fetchCampers = createAsyncThunk('campers', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/campers');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
