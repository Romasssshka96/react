export type RootObject = IUser[];
export interface IUser {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}