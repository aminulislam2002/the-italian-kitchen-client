import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ChefRecipe from "../layouts/ChefRecipe";
import ChefRecipesDetails from "../pages/Home/ChefRecipesDetails/ChefRecipesDetails";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../pages/Page404/Page404";

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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/chef",
    element: <ChefRecipe></ChefRecipe>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefRecipesDetails></ChefRecipesDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`),
      },
    ],
  },
  {
    path: "/*",
    element: <Page404></Page404>,
  },
]);

export default router;
