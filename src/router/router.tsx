import { createBrowserRouter} from "react-router";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SearchPage } from "../pages/SearchPage";
import { HomePage } from "../pages/HomePage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";

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
  {
    path: "favorites",
    element: <FavoritesPage />
  },
  {
    path: "login",
    element: <LoginPage />
  },
  {
    path: "profile",
    element: <ProfilePage />
  },
]);

export default router;