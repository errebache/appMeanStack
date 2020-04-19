import { User } from './models';

export interface Comment {
    readonly time: number;
    readonly user: User;
    readonly content: string;
}

