import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto max-w-7xl">
    <React.StrictMode>
    
        <RouterProvider router={router} />
      
    </React.StrictMode>
  </div>
);