import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SignUp, UserDashboard, AdminDashboard } from "../components/pages";
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
            path: "/user",
            element: <UserDashboard />,
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