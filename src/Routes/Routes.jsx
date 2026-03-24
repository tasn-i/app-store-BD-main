import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPaga/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index : true,
            loader: ()=>fetch('appData.json'),
            path: "/",
            Component: Home
        },
        {
          path: "/apps",
          loader: ()=>fetch('appData.json'),
          Component: Apps
        },
        {
          path: "/installation",
          Component:Installation
        }
    ]
  },
]);