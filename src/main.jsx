import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
 
} from "react-router-dom";
import "./index.css";
import App from "./App";
import AbboutUs from "./pages/AbboutUs";
import Home from './pages/Home';
import Nav from './pages/Nav';
 


const Layout =()=>{
  return(
    <div>

    </div>
  );
};


const router = createBrowserRouter([
  {
  path:'/',
  element:<Layout/>,
  children:[
    {
    path:'/',
    element:<App />,
  },
  {
    path:'/AbboutUs',
    element:<AbboutUs />,
  },
  
  // {
  //   path:'/',
  //   element:<App />,
  // }, 
  
  // {
  //   path:'/',
  //   element:<App />,
  // },
],
},
]);

<div>
  <h1>X-Drive-Auto</h1>
</div>



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>

);