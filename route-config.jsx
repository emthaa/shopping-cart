import Home from "./src/components/main/Home";
import ErrorPage from "./src/components/error/ErrorPage";
import Shop from "./src/components/main/Shop";

const routesConfig = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/Shop",
    element: <Shop />,
    
  },
];

export default routesConfig