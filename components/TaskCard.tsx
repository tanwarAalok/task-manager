'use client'

import { formatDistanceToNow } from 'date-fns';
import {Task} from "@/types";
import {DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps} from "@hello-pangea/dnd";
import {openExistingTaskModal} from "@/redux/taskSlice";
import {useDispatch} from "react-redux";
import {capitalizeFirstLetter} from "@/utils/helperFunctions";

type Props =  {
    task: Task;
    innerRef: (element: HTMLElement | null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

export default function TaskCard ({ task, innerRef, draggableProps, dragHandleProps }: Props){
    const dispatch = useDispatch();
    const openTaskModal = () => {
        dispatch(openExistingTaskModal(task))
    }

    return (
        <div onClick={openTaskModal} className="p-4 bg-[#F9F9F9] rounded-lg border-[1px]" ref={innerRef} {...draggableProps} {...dragHandleProps}>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="mt-2 text-gray-700">{task.description}</p>
            {task.priority ? <div className="mt-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">{capitalizeFirstLetter(task.priority)}</span>
            </div> : ''}
            <div className="mt-4 text-sm text-gray-500">
                <p>Due: {new Date(task.deadline).toLocaleDateString()}</p>
                <p>{capitalizeFirstLetter(`${formatDistanceToNow(task.createdAt)} ago`)}</p>
            </div>
        </div>
    )
}