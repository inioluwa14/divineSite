import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Login from './pages/auth/Login';
import Signin from './pages/auth/Signin';
import Contact from './pages/Contact';

const router = createBrowserRouter([
    {
      path:"/",
      element:<App />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path:"services",
      element:<Services />,
    },
    {
      path:"contact",
      element: <Contact />
    },
    {
      path:"login",
      element: <Login />,
    },
    {
      path:"signin",
      element: <Signin />
    },
    
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

