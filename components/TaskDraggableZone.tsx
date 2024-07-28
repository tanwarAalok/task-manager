import {DragDropContext, Droppable, DropResult, OnDragEndResponder} from "react-beautiful-dnd";
import {useState} from "react";
import TaskColumn from "@/components/TaskColumn";
import {Task} from "@/types";


type Props = {
    [key in string]: Task[]
}

export default function TaskDraggableZone({todos, inProgress, underReview, finished}: Props) {

    const handleOnDragEnd = (result: DropResult) => {
        const {destination, source, type } = result;

        console.log(destination, source, type)
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-4">
                <TaskColumn
                    id="todos"
                    tasks={todos}
                    sectionTitle="To do"
                />
                <TaskColumn
                    tasks={inProgress}
                    sectionTitle="In progress"
                    id="inProgress"
                />
                <TaskColumn
                    tasks={underReview}
                    sectionTitle="Under review"
                    id="underReview"
                />
                <TaskColumn
                    tasks={finished}
                    sectionTitle="Finished"
                    id="finished"
                />
            </div>
        </DragDropContext>
    )
}