export interface IUser{
    id: number;
    name: string;
    surname: string;
    age: number;
    email: string;
    password: string;
}

export interface IPost{
    id: number;
    title: string;
    body: string;
    img: string;
    user_id: number
}