import { formatDistanceToNow } from 'date-fns';
import {Task} from "@/types";
import {DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps} from "react-beautiful-dnd";

type Props =  {
    task: Task;
    index: number;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

export default function TaskCard ({ task, index, innerRef, draggableProps, dragHandleProps }: Props){
    return (
        <div className="p-4 bg-[#F9F9F9] rounded-lg border-[1px]" ref={innerRef} {...draggableProps} {...dragHandleProps}>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="mt-2 text-gray-700">{task.description}</p>
            <div className="mt-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">{task.priority}</span>
            </div>
            <div className="mt-4 text-sm text-gray-500">
                <p>Due: {task.deadline.toLocaleDateString()}</p>
                <p>Created: {formatDistanceToNow(task.createdAt)} ago</p>
            </div>
        </div>
    )
}