import {Droppable, Draggable, DroppableProvided, DroppableStateSnapshot, DraggableProvided} from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import {Task, TypedColumns} from "@/types";

type Props = {
    id: TypedColumns
    tasks: Task[]
    sectionTitle: string
}

export default function TaskColumn({ id, tasks, sectionTitle }: Props){
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{sectionTitle}</h3>
                <button>
                    <img src="/hamberger.svg" alt="hamberger"/>
                </button>
            </div>
                <Droppable droppableId={id} type="card">
                    {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} className={`flex flex-col gap-4 ${snapshot.isDraggingOver ? "bg-gray-600" : "bg-transparent"}`}>
                            {tasks.map((task: Task, index: number) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided: DraggableProvided) => (
                                        <TaskCard
                                            task={task}
                                            index={index}
                                            innerRef={provided.innerRef}
                                            draggableProps={provided.draggableProps}
                                            dragHandleProps={provided.dragHandleProps}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                            <button
                                className="flex justify-between items-center mt-6 p-2 bg-gradient-btn-black text-[#E3E1E1] text-base rounded-lg w-full">
                                Add New
                                <img src="/addIcon2.svg" alt="addIcon2"/>
                            </button>
                        </div>
                    )}
                </Droppable>
        </div>
    );
};
