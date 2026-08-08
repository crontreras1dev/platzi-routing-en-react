import { createBrowserRouter} from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SearchPage } from "../pages/SearchPage";
import { HomePage } from "../pages/HomePage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { LoginPage } from "../pages/LoginPage";
import { ProfilePage } from "../pages/ProfilePage";
import { BookingPage } from "../pages/BookingPage";
import { BookingLayout } from "../layouts/BookingLayout";
import { PorpertyDetailPage } from "../pages/PropertyDeatilPage";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "property/:id", element: <PorpertyDetailPage /> },
      { 
        path: "booking", 
        element: <BookingLayout />, 
        children: [{ path: ":id", element: <BookingPage /> }] 
      },
      { path: "*", element: <NotFoundPage /> },
    ]
  },
]);

export default router;