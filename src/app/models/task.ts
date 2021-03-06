export interface Task {
    id?:number;
    projectId?: string;
    title:string;
    done:boolean;
    status?:string;
    dateCreated?: Date;
    priority?:string;
}

export type TaskListFilterType = 'all' | 'open' | 'done'; 