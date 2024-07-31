import {TaskBody} from "@/types";

export const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};


const isString = (value: string)  => value.length > 0;

export const validateTaskBody = (task: any): task is TaskBody => {
    const hasValidTitle = task.title !== null && isString(task.title);
    const hasValidStatus = task.status !== null
    const hasValidDeadline = task.deadline !== null;

    return hasValidTitle && hasValidStatus && hasValidDeadline;
};