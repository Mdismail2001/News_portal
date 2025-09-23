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
import AuthLayout from './components/authLayout/AuthLayout.jsx';
import Login from './components/authLayout/Login.jsx';
import Register from './components/authLayout/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './provider/PrivateRoute.jsx';
import NewsDetails from './components/Pages/NewsDetails.jsx';

const router = createBrowserRouter([
  { path: "/", Component: Home,
    children:[
      {path:"", Component:HomeChild },
      {path:"/category/:id", Component: CategoryNews,
        loader: ()=> fetch('/public/demo-data/news.json')
      }
    ]

  },
  {
    path:"/auth",
    Component:AuthLayout,
    children:[
      {path:'/auth/login', Component:Login},
      {path:'/auth/register', Component:Register},
    ]
  },
{
  path: "/news-details/:id",
  element: (
    <PrivateRoute>
      <NewsDetails />
    </PrivateRoute>
  ),
  loader: () => fetch('/public/demo-data/news.json')
}

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
