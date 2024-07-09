import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/home";
import CheckOutPage from "./pages/checkout";

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
      path: "/*",
      element: <HomePage />,
    },
  ];

  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};
