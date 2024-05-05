import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SignUp, UserDashboard, AdminDashboard } from "../components/pages";
import { Home, Profile } from "../components/userDashboard";
import MainLayout from "../components/layout/MainLayout";


function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/user/:userId",
            element: <UserDashboard />,
            children: [
                {
                    path: "/user/:userId/home",
                    element: <Home />,
                },
                {
                    path: "/user/:userId/profile",
                    element: <Profile />,
                },
                {
                    path: "/user/:userId/",
                    element: <Home />,
                },
            ]
        },
        {
            path: "/admin",
            element: <AdminDashboard />,
        }
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Routes;