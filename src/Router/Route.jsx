import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Chocolate from "../pages/Chocolate/Chocolate.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";



const myCreatedRoute =  createBrowserRouter([
    {
        path : "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader : ()=> fetch('/chocolates.json')
            },
            {
                path : "/favorites",
                element : <Favorites></Favorites>
            },
            {
                path : "/chocolates/:id",
                element : <Chocolate></Chocolate>,
                loader : ()=> fetch('/chocolates.json')
                
                
               
            }
           
        ]
       

    }
])

export default myCreatedRoute;





