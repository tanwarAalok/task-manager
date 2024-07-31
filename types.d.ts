import {Priority, TypedColumns} from "@/utils/enums";

interface Board{
    columns: Record<TypedColumns, Column>
}

interface Column {
    id: TypedColumns
    tasks: Tasks[]
}

interface Task {
    _id: string;
    title: string;
    description?: string;
    status: TypedColumns;
    priority?: Priority;
    deadline: Date;
    createdAt: Date;
}

interface TaskBody {
    title: string;
    description?: string;
    status: TypedColumns;
    priority?: Priority;
    deadline: Date;
}

export interface NewTask {
    title: string;
    description: string;
    status: TypedColumns | undefined;
    priority: Priority | undefined;
    deadline: Date | undefined;
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