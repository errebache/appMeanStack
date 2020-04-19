import { Comment } from './models';

export interface Project {
    readonly _id?: string;
    readonly title: string;
    readonly description: string;
    readonly comments: Comment[];
}

