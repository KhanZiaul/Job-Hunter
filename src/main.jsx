import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error/Error.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import Blog from './Components/Blog/Blog.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'job/:id',
        element:<JobDetails></JobDetails>,
        loader:() => fetch('/jobs.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
