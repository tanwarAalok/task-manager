import {createSlice, PayloadAction, createAsyncThunk, AsyncThunk} from '@reduxjs/toolkit';
import { login, signup } from '@/api/apiFetcher';
import {AsyncThunkConfig, AuthState} from "@/types";

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

export const loginUser = createAsyncThunk<any, { email: string; password: string }, AsyncThunkConfig>('auth/loginUser', async ({ email, password }: { email: string; password: string }, thunkAPI) => {
    try {
        const response = await login(email, password);
        return response;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const signupUser = createAsyncThunk('auth/signupUser', async ({ fullname, email, password }: { fullname: string; email: string; password: string }, thunkAPI) => {
    try {
        const response = await signup(fullname, email, password);
        return response;
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.user = action.payload.data;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload.error;
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signupUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.user = action.payload.data;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(signupUser.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload.error;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
