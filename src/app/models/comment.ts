import { User } from './models';

export interface Comment {
    _id:string;
    readonly time: number;
    readonly user: User;
    readonly content: string;
}


