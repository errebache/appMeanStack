export interface Task {
    _id?:string;
    projectId?: string;
    title:string;
    done:boolean;
    status?:string;
    dateCreated?: Date;
    priority?:string;
}

export type TaskListFilterType = 'all' | 'open' | 'done'; 