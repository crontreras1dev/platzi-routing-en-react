import { createBrowserRouter} from "react-router";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
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

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { 
        path: "favorites", 
        element: (
          <ProtectedRoute>
            <FavoritesPage />
          </ProtectedRoute> 
        )
      },
      { path: "login", element: <LoginPage /> },
      { 
        path: "profile", 
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ) 
      },
      { path: "property/:id", element: <PorpertyDetailPage /> },
      { 
        path: "booking", 
        element: <BookingLayout />, 
        children: [
          { 
            path: ":id", 
            element: (
              <ProtectedRoute>
                <BookingPage /> 
              </ProtectedRoute>
            )
          } 
        ] 
      },
      { path: "*", element: <NotFoundPage /> },
    ]
  },
]);