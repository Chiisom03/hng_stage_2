import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home";
import CartPage from "./pages/cart";

export const AppRouter = () => {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/*",
      element: <HomePage />,
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
