'use client'

import {
    Droppable,
    Draggable,
    DroppableProvided,
    DroppableStateSnapshot,
    DraggableProvided,
} from "@hello-pangea/dnd";
import TaskCard from './TaskCard';
import {Task} from "@/types";
import {useDispatch} from "react-redux";
import { openNewTaskModal } from "@/redux/taskSlice";
import {TypedColumns} from "@/utils/enums";

type Props = {
    id: TypedColumns
    tasks: Task[]
}

const idToTitle: {[key in TypedColumns]: string} = {
    "todo": "To do",
    "inprogress": "In progress",
    "underreview": "Under Review",
    "finished": "Finished"
}

export default function TaskColumn({id, tasks}: Props) {

    const dispatch = useDispatch();

    const handleOpenModal = () => {
        dispatch(openNewTaskModal(id))
    }

    return (
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{idToTitle[id]}</h3>
                    <button>
                        <img src="/hamberger.svg" alt="hamberger"/>
                    </button>
                </div>
                <Droppable droppableId={id} type="card">
                    {(provided: DroppableProvided , snapshot: DroppableStateSnapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className={`flex flex-col gap-4 ${snapshot.isDraggingOver ? "bg-gray-600" : "bg-transparent"}`}>
                            {tasks.map((task: Task, index: number) => (
                                <Draggable key={task._id} draggableId={task._id.toString()} index={index}>
                                    {(provided: DraggableProvided) => (
                                        <TaskCard
                                            task={task}
                                            innerRef={provided.innerRef}
                                            draggableProps={provided.draggableProps}
                                            dragHandleProps={provided.dragHandleProps}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            <button onClick={handleOpenModal}
                                className="flex justify-between items-center mt-6 p-2 bg-gradient-btn-black text-[#E3E1E1] text-base rounded-lg w-full">
                                Add New
                                <img src="/addIcon2.svg" alt="addIcon2"/>
                            </button>
                        </div>
                    )}
                </Droppable>
            </div>
    )
}
