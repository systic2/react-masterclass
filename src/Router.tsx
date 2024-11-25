import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
