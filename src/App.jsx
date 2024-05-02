
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/main/Home.jsx";
import Shop from "./components/main/Shop.jsx";
import ErrorPage from "./components/error/ErrorPage.jsx";
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/Shop",
    element: <Shop />,
    
  },
]);


function App(){
    return(
        <RouterProvider router={router} />
    )
}

export default App