'use client'

import TaskColumn from "@/components/TaskColumn";
import {Board, TypedColumns} from "@/types";
import {DragDropContext, DropResult} from "@hello-pangea/dnd";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "@/redux/store";
import {moveTask} from "@/redux/boardSlice";

export default function TaskDraggableZone() {

    const dispatch: AppDispatch = useDispatch();
    const tasksMap: Board = useSelector((state: RootState) => state.board);

    console.log(tasksMap)

    const handleOnDragEnd = (result: DropResult) => {
        const { destination, source } = result;
        if (!destination) return;

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
    };

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-4">
                {Array.from(tasksMap.columns.entries()).map(([id, column]) => (
                    <TaskColumn
                        key={id}
                        id={id}
                        tasks={column.tasks}
                    />
                ))}
            </div>
        </DragDropContext>
    )
}