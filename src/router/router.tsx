import React from "react";
import {ALBUMS_ROUTE, COMMENTS_ROUTE, PHOTOS_ROUTE, POSTS_ROUTE, ROOT_ROUTE, TODOS_ROUTE, USERS_ROUTE} from "./routes";
import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage";
import PostsPage from "../pages/PostsPage";
import UsersPage from "../pages/UsersPage";

export const router = createBrowserRouter([
    {
        path: ROOT_ROUTE,
        element: <MainPage />
    },
    {
        path: POSTS_ROUTE,
        element: <PostsPage />
    },
    {
        path: USERS_ROUTE,
        element: <UsersPage />
    },
    // {
    //     path: COMMENTS_ROUTE,
    //     element: ''
    // },
    // {
    //     path: ALBUMS_ROUTE,
    //     element: ''
    // },
    // {
    //     path: PHOTOS_ROUTE,
    //     element: ''
    // },
    // {
    //     path: TODOS_ROUTE,
    //     element: ''
    // }
]);