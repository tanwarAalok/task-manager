interface Board{
    columns: Map<TypedColumns, Column>
}

export type TypedColumns = "todo" | "inprogress" | "underreview" | "finished"
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
    priority: Priority | null;
    deadline: Date;
    createdAt: Date;
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
    id: string;
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