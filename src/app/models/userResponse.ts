
import { User } from './models';

export interface UserResponse {
    success?: boolean,
    token?: string,
    user?:User
}

