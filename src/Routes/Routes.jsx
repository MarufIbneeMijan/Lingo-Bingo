import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import HomeLayout from '../Layouts/HomeLayout';
import Register from '../Components/Register';
import Login from '../Components/Login';
import PrivetRoutes from './PrivetRoutes';
import Header from '../Components/Header';
import StartLesson from '../Components/StartLesson';
import Lesson from '../Components/Lesson';
import About from '../Components/About';
import Progress from '../Components/Progress';
import Profile from '../Components/Profile';
import Tutorial from '../Components/Tutorial';
import ErrorPage from '../Components/ErrorPage';
const router = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"reg",
                element:<Register></Register>
            },
            {
                path:"/about",
                element:<About></About>
            },
        ]
    },
  
    {
        path:"/progress",
        element:<PrivetRoutes><Progress></Progress></PrivetRoutes>
    }, 
    {
        path:"start-learning",
        element:<PrivetRoutes><StartLesson></StartLesson></PrivetRoutes>,
    },
    {
            path:'/lesson/:id',
            loader:({params})=>fetch("https://api.npoint.io/026a4f40d71d4fb9b6a6"),
            element:<PrivetRoutes><Lesson></Lesson></PrivetRoutes>

    },
    {
        path:"/profile",
        element:<PrivetRoutes><Profile></Profile></PrivetRoutes>
    },
    {
        path:"/Tutorial",
        element:<PrivetRoutes><Tutorial></Tutorial></PrivetRoutes>
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
   
    
])

export default router;