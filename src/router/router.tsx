import { createBrowserRouter} from "react-router";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SearchPage } from "../pages/SearchPage";
import { HomePage } from "../pages/HomePage";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/search",
    element: <SearchPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  },
]);

export default router;