import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Search from "./pages/Search/SearchPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);
