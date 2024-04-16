import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage, Login, SignUp, UserDashboard, AdminDashboard } from "../components/pages";


function Routes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
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