import React from 'react';
// import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPaga/ErrorPage';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
// import AppDetails from '../Pages/appDetails/AppDetails';
   import AppDetails from '../Pages/appDetails/AppDetails'
import { createHashRouter } from 'react-router';


export const router = createHashRouter([
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
          loader: ()=>fetch('appData.json'),
          Component:Installation
        },

        {
          path: "/appDetails/:id",
          loader: () => fetch('appData.json'),
          Component: AppDetails
        }
         
    ]
  },
]);