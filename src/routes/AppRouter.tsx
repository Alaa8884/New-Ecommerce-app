import { createBrowserRouter, RouterProvider } from "react-router";
import { MainLayout } from "@layouts/index";
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import About from "@pages/About";
import Products from "@pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "products/:prefix",
        element: <Products />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
