import { IUser } from "./user";

export interface IUserResponse {
    code: number;
    data: IUser[];
    status: string;
    total: number;
}