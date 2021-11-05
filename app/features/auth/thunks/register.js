import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../../../api/auth';

const register = createAsyncThunk(
  'auth/register',
  async (userdata, thunkApi) => {
    try {
      const response = await authApi.register(userdata);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

export default register;
