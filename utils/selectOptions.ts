import {Priority, TypedColumns} from "@/utils/enums";


export const statusOptions = [
    { label: 'Not selected', value: null },
    { label: 'To Do', value: TypedColumns.Todo },
    { label: 'In Progress', value: TypedColumns.InProgress },
    { label: 'Under Review', value: TypedColumns.UnderReview },
    { label: 'Finished', value: TypedColumns.Finished },
];

export const priorityOptions = [
    { label: 'Not selected', value: null },
    { label: 'Low', value: Priority.Low },
    { label: 'Medium', value: Priority.Medium  },
    { label: 'Urgent', value: Priority.Urgent  },
];