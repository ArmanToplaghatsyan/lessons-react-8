import React from "react";
import { IPost, IUser } from "../types/types";

export interface IData{
    users: IUser[];
    posts: IPost[];
    img: string[];
    createUser: Function;
    createPost:Function;
    deleteUserById: Function;
    deletePostById: Function;

}

export const MyContext = React.createContext<IData>({} as IData)