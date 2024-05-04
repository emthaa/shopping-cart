import {RouterProvider ,createBrowserRouter} from "react-router-dom";
import "./App.css";
import routesConfig from "../route-config.jsx"

const router = createBrowserRouter(routesConfig);

function App(){
    return(
        <RouterProvider router={router} />
    )
}

export default App