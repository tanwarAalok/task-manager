'use client'

import TaskColumn from "@/components/TaskColumn";
import {Board, Task, TypedColumns} from "@/types";
import {DragDropContext, DropResult} from "@hello-pangea/dnd";
import {useState} from "react";
import {mockBoard} from "@/data/mockData";

export default function TaskDraggableZone() {

    const [tasksMap, setTasksMap] = useState<Board>(mockBoard);

    const handleOnDragEnd = (result: DropResult) => {
        const {destination, source} = result;

        if (!destination) return;

        const sourceColumn = tasksMap.columns.get(source.droppableId as TypedColumns);
        const destinationColumn = tasksMap.columns.get(destination.droppableId as TypedColumns);

        if (!sourceColumn || !destinationColumn) return;

        const sourceTasks = [...sourceColumn.tasks];
        const [movedTask] = sourceTasks.splice(source.index, 1);

        if (source.droppableId === destination.droppableId) {
            sourceTasks.splice(destination.index, 0, movedTask);
            setTasksMap({
                ...tasksMap,
                columns: new Map(tasksMap.columns.set(source.droppableId as TypedColumns, {
                    ...sourceColumn,
                    tasks: sourceTasks
                }))
            });
        } else {
            const destinationTasks = [...destinationColumn.tasks];
            destinationTasks.splice(destination.index, 0, movedTask);

            setTasksMap({
                ...tasksMap,
                columns: new Map(tasksMap.columns
                    .set(source.droppableId as TypedColumns, {
                        ...sourceColumn,
                        tasks: sourceTasks
                    })
                    .set(destination.droppableId as TypedColumns, {
                        ...destinationColumn,
                        tasks: destinationTasks
                    })
                )
            });
        }
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