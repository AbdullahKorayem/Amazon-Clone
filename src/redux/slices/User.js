import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firestore/firestore';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  'User/UserData',
  async (_, { rejectWithValue }) => {
    try {
      const userUid = localStorage.getItem('UserUid');
      if (!userUid) {
        return rejectWithValue('No user UID in local storage');
      }

      const userRef = doc(db, 'Users', userUid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        return userSnap.data();
      } else {
        return rejectWithValue('User not found in Firestore');
      }
    } catch (error) {
      return rejectWithValue(
        error.message || 'An error occurred while fetching user data'
      );
    }
  }
);
const userSlice = createSlice({
  name: 'User',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.user = null;
      });
  },
});

export const initializeUser = () => dispatch => {
  const userUid = localStorage.getItem('UserUid');
  if (userUid) {
    dispatch(fetchUser());
  }
};

export default userSlice.reducer;
