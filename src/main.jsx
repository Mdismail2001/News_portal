import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Layout/Root.jsx';
import Home from './components/Layout/Home.jsx';
import HomeChild from './components/Pages/HomeChild.jsx';
import CategoryNews from './components/Pages/CategoryNews.jsx';

const router = createBrowserRouter([
  { path: "/", Component: Home,
    children:[
      {path:"", Component:HomeChild },
      {path:"/category/:id", Component: CategoryNews}
    ]

  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> 
    </RouterProvider>
  </StrictMode>,
)
