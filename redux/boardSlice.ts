'use client'

import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Board } from '@/types';
import {fetchUserBoard, updateTaskStatus} from "@/api/apiFetcher";
import {TypedColumns} from "@/utils/enums";

interface BoardState {
    data: Board | null;
    loading: boolean;
    error: string | null;
}

const initialState: BoardState = {
    data: null,
    loading: false,
    error: null
};

export const fetchBoard = createAsyncThunk<Board, string>(
    'board/fetchBoard',
    async (userId, thunkAPI) => {
        try {
            const response = await fetchUserBoard(userId);
            return response.data;
        } catch (error) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }
            return thunkAPI.rejectWithValue('Unknown error');
        }
    }
);


const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setBoard: (state, action: PayloadAction<Board>) => {
            state.data = action.payload;
        },
        moveTask: (
            state,
            action: PayloadAction<{
                source: { droppableId: TypedColumns; index: number };
                destination: { droppableId: TypedColumns; index: number };
            }>
        ) => {
            const { source, destination } = action.payload;
            const sourceColumn = state.data?.columns[source.droppableId];
            const destinationColumn = state.data?.columns[destination.droppableId];

            if (!sourceColumn || !destinationColumn) return;

            // Remove the task from the source column
            const [movedTask] = sourceColumn.tasks.splice(source.index, 1);

            // Add the task to the destination column
            destinationColumn.tasks.splice(destination.index, 0, movedTask);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBoard.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchBoard.fulfilled, (state, action: PayloadAction<Board>) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchBoard.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    }
});



export const { setBoard, moveTask } = boardSlice.actions;
export default boardSlice.reducer;
