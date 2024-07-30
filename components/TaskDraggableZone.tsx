'use client'

import TaskColumn from "@/components/TaskColumn";
import {TypedColumns} from "@/types";
import {DragDropContext, DropResult} from "@hello-pangea/dnd";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/redux/store";
import {fetchBoard, moveTask} from "@/redux/boardSlice";
import {useEffect} from "react";
import {updateTaskStatus} from "@/api/apiFetcher";

export default function TaskDraggableZone({ userId }: { userId: string }) {

    const dispatch: AppDispatch = useDispatch();
    const { data: board, loading, error } = useSelector((state: RootState) => state.board);

    useEffect(() => {
        dispatch(fetchBoard(userId));
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleOnDragEnd = async (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) return

        dispatch(moveTask({
            source: {
                droppableId: source.droppableId as TypedColumns,
                index: source.index,
            },
            destination: {
                droppableId: destination.droppableId as TypedColumns,
                index: destination.index,
            }
        }));

        try {
            console.log(draggableId, destination.droppableId);
            await updateTaskStatus(draggableId, destination.droppableId);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-4">
                {board && Object.entries(board.columns).map(([id, column]) => (
                    <TaskColumn
                        key={id}
                        id={id as TypedColumns}
                        tasks={column.tasks}
                    />
                ))}
            </div>
        </DragDropContext>
    )
}