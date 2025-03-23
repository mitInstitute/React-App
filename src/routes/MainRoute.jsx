import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import MainLayout from "../layout/MainLayout";
import AboutPage from "../pages/about/AboutPage";
import ProductsPage from "../pages/products/ProductsPage";

const MainRoute = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout />,
        children:[
            {path:"/", element:<HomePage />},
            {path:"/about", element:<AboutPage />},
            {path:"/products", element:<ProductsPage />}
        ]
    }
])

export default MainRoute