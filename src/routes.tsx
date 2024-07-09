import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home";
import CheckOutPage from "./pages/checkout";
import Products from "./pages/products";

export const AppRouter = () => {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: <CheckOutPage />,
    },
    {
      path: "/checkout/:id",
      element: <CheckOutPage />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/*",
      element: <HomePage />,
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
