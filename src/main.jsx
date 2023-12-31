import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Login from "./Pages/Login/Login.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Home from "./Pages/Home/Home";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Recipe from "./Pages/Recipe/Recipe";
import UnknownPage from "./Pages/UnknownPage";
import 'react-toastify/dist/ReactToastify.css';
import Blog from "./Pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path:"recipe/:id",
        element:<PrivateRoute><Recipe></Recipe></PrivateRoute> ,
        loader:({params})=>fetch(`https://chef-recipe-hunter-server-side-nakib1948.vercel.app/recipes/${params.id}`)
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path:"*",
        element: <UnknownPage/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
