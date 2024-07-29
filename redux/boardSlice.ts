'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board, TypedColumns } from '@/types';
import { mockBoard } from '@/utils/mockData';

const initialState: Board = mockBoard;

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setBoard: (state, action: PayloadAction<Board>) => {
            return action.payload;
        },
        moveTask: (
            state,
            action: PayloadAction<{
                source: { droppableId: TypedColumns; index: number };
                destination: { droppableId: TypedColumns; index: number };
            }>
        ) => {
            const { source, destination } = action.payload;
            const sourceColumn = state.columns.get(source.droppableId);
            const destinationColumn = state.columns.get(destination.droppableId);

            if (!sourceColumn || !destinationColumn) return;

            const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
            destinationColumn.tasks.splice(destination.index, 0, movedTask);
        },
    },
});

export const { setBoard, moveTask } = boardSlice.actions;
export default boardSlice.reducer;
