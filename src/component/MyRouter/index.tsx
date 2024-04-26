import React from "react";
import { useRoutes } from "react-router-dom";
import { Layout } from "../../pages/Layout";
import { LogIn } from "../../pages/LogIn";
import { Register } from "../../pages/Register";
import { Profile } from "../../pages/Profile";
import { MyPost } from "../../pages/MyPost";
import { MyError } from "../../pages/MyError";

export const MyRouter = React.memo(() => {
   const router = useRoutes([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {path: '', element: <LogIn/>},
            {path: 'register', element: <Register/>},
            {path: 'profile/:id', element: <Profile/>},
            {path: 'mypost/:id', element:<MyPost/>}
        ]
    },
        {path: '*', element:<MyError/>}
   ])
   
   return router
})