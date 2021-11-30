import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthEntity {
  access_token: string;
}

export interface AuthState {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string | null;
  auth: AuthEntity;
}

export interface AuthFetchStatusDTO {
  username: string;
  password: string;
}

export const fetchAuth = createAsyncThunk(
  'auth/fetchStatus',
  async (payload: AuthFetchStatusDTO) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch('/api/auth/login', options);
    return await response.json();
  }
);

export const initialAuthState: AuthState = {
  loadingStatus: 'not loaded',
  error: null,
  auth: {
    access_token: '',
  },
};

export const authSlice = createSlice({
  name: AUTH_FEATURE_KEY,
  initialState: initialAuthState,
  reducers: {
    remove: (state: AuthState) => {
      state.auth.access_token = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state: AuthState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchAuth.fulfilled,
        (state: AuthState, action: PayloadAction<AuthEntity>) => {
          state.auth = action.payload;
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchAuth.rejected, (state: AuthState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

export const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;

interface RootState {
  [AUTH_FEATURE_KEY]: AuthState;
}

// TODO: move inline rootStore type to destinate app store module
export const getAuthState = (rootState: RootState): AuthState =>
  rootState[AUTH_FEATURE_KEY];

export const selectIsAuth = (state: RootState) => {
  const { auth, error, loadingStatus } = state[AUTH_FEATURE_KEY];
  return (
    !error &&
    !!auth.access_token &&
    (loadingStatus === 'loaded' || loadingStatus === 'not loaded')
  );
};
