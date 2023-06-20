import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";



function App() {
  const Layout = ()=>{
    return(
      <div>
        <Navbar/>
        <Outlet/>
        
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element: <Home/>
        },
        {
          path:'/cart',
          element: <Cart/>
        },
        
      ]
    },
  ]);
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  );
}

export default App;
