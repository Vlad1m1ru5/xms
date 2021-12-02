import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchStatus } from './user.api';

export const USER_FEATURE_KEY = 'user';

export interface UserEntity {
  roleName: string;
  access_token: string;
}

export interface UserState {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string | null;
  entity: UserEntity | null;
}

export const fetchUser = createAsyncThunk('user/fetchStatus', fetchStatus);

export const initialUserState: UserState = {
  loadingStatus: 'not loaded',
  error: null,
  entity: null,
};

export const userSlice = createSlice({
  name: USER_FEATURE_KEY,
  initialState: initialUserState,
  reducers: {
    remove: (state: UserState) => {
      state.entity = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state: UserState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchUser.fulfilled,
        (state: UserState, action: PayloadAction<UserEntity>) => {
          state.loadingStatus = 'loaded';
          state.entity = action.payload;
        }
      )
      .addCase(fetchUser.rejected, (state: UserState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

export const userReducer = userSlice.reducer;

export const userActions = userSlice.actions;

interface RootState {
  [USER_FEATURE_KEY]: UserState;
}

export const getUserState = (rootState: RootState): UserState => rootState[USER_FEATURE_KEY];

export const selectIsAuth = (state: RootState) =>
  !state.user.error &&
  !!state.user.entity?.access_token &&
  (state.user.loadingStatus === 'loaded' || state.user.loadingStatus === 'not loaded');

export const selectIsAdmin = (state: RootState) =>
  selectIsAuth(state) && state.user.entity?.roleName === 'admin';
