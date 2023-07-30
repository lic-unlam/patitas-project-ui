import { createBrowserRouter } from "react-router-dom";

// Componentes
import Welcome from "../components/home/Welcome";
import AuthenticationForms from "../components/auth/AuthenticationForms";
import Profile from "../components/user/Profile";
import Notifications from "../components/user/Notifications";
import Shelter from '../components/shelter/Shelter';
import ShelterDetails from '../components/shelter/ShelterDetails';
import Publication from "../components/shelter/sections/Publication";
import Missing from "../components/forum/Missing";

// Componentes fijos

import LayoutPublic from "../components/layout/LayoutPublic";
import NotFound from '../components/errors/NotFound';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            {
                errorElement: <NotFound />,
                children: [
                    {
                        index: true,
                        element: <Welcome />
                    },
                    {
                        path: "/auth/signin",
                        element: <AuthenticationForms />
                    },
                    {
                        path: "/user/profile",
                        element: <Profile />
                    },
                    {
                        path: "user/notifications",
                        element: <Notifications />
                    },
                    {
                        path: "/forum/missing",
                        element: <Missing />
                    },
                    {
                        path: "/shelter",
                        element: <Shelter />
                    },
                    {
                        path: "/shelter/:id",
                        element: <ShelterDetails />,
                        children: [
                            {
                                path: "/shelter/:id/publication/:postid", // es obligatorio que lo combine el path padre
                                element: <Publication />
                            }
                        ]
                    },
                ],
            },
        ],
    },
]);