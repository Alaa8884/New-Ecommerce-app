import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "@layouts/index";
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import About from "@pages/About";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";
import ShoppingCart from "@pages/ShoppingCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              status: 400,
              statusText: "Category not found",
            });
          }
          return true;
        },
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
