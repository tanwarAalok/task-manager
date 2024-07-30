interface Board{
    columns: Record<TypedColumns, Column>
}

export type TypedColumns = "todo" | "inprogress" | "underreview" | "finished"
type Priority = "low" | "medium" | "urgent"

interface Column {
    id: TypedColumns
    tasks: Tasks[]
}

export interface Task {
    _id: string;
    title: string;
    description: string;
    status: TypedColumns;
    priority: Priority | null;
    deadline: Date;
    createdAt: Date;
}

export interface TaskBody {
    title: string;
    description: string;
    status: TypedColumns;
    priority: Priority | null;
    deadline: Date;
}

export interface NewTask {
    id: string;
    title: string;
    description: string;
    status: TypedColumns | null;
    priority: Priority | null;
    deadline: Date | null;
    createdAt: Date;
}

export interface User {
    _id: string;
    fullname: string;
    email: string;
}

export interface AuthResponse {
    data: User;
    token: string;
}

export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

export interface AsyncThunkConfig {
    state: RootState;
    dispatch: ThunkDispatch<RootState, any, AnyAction>;
    rejectValue: {
        error: string;
    };
}