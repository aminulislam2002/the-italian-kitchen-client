import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ChefRecipe from "../layouts/ChefRecipe";
import ChefRecipesDetails from "../pages/Home/ChefRecipesDetails/ChefRecipesDetails";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../pages/Page404/Page404";
import Blog from "../pages/Blog/Blog";
import RegisterLogin from "../layouts/RegisterLogin";

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
      {
        path: "/register",
        element: <Register></Register>,
      },
      ,
      {
        path: "/blog",
        element: <Blog></Blog>,
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
        loader: ({ params }) =>
          fetch(`https://ph-assignment-number-ten-server-aminulislam2002.vercel.app/recipes/${params.id}`),
      },
    ],
  },
  // {
  //   path: "/login",
  //   element: <RegisterLogin></RegisterLogin>,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <Login></Login>,
  //     },
  //     {
  //       path: "/register",
  //       element: <Register></Register>,
  //     },
  //   ],
  // },
  {
    path: "/*",
    element: <Page404></Page404>,
  },
]);

export default router;
