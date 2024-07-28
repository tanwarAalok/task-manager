interface Board{
    columns: Map<TypedColumns, Column>
}

export type TypedColumns = "todos" | "inProgress" | "underReview" | "finished"
type Priority = "low" | "medium" | "urgent"

interface Column {
    id: TypedColumns
    tasks: Tasks[]
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TypedColumns;
    priority: Priority;
    deadline: Date;
    createdAt: Date;
}