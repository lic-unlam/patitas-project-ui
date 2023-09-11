import { createBrowserRouter } from "react-router-dom";

// Home
import Welcome from "../components/home/Welcome";

// Acciones de usuario
import AuthenticationForms from "../components/auth/AuthenticationForms";
import PanelDeUsuario from "../components/user/PanelDeUsuario";
import { TurnoDetalle } from "../components/user/TurnoDetalle";
import Notifications from "../components/user/Notifications";
import adoptanteTabs from '../config/usuario/adoptanteTabs.json';

// Refugios
import Shelter from '../components/shelter/Shelter';
import ShelterDetails from '../components/shelter/ShelterDetails';
import Publication from "../components/shelter/sections/Publication";
import BuscadorDeRefugios from "../components/shelter/buscar/BuscadorDeRefugios";

// Foro
import Forum from "../components/forum/Forum";
import Missing from "../components/forum/Missing";

// Componentes fijos

import LayoutPublic from "../components/layout/LayoutPublic";
import NotFound from '../components/errors/NotFound';
import PostList from "../components/forum/PostList";

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
                        path: `/adoptantes/:id/${adoptanteTabs.datosPersonales}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.datosPersonales} />
                    },
                    {
                        path: `/adoptantes/:id/${adoptanteTabs.formularioPreAdopcion}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.formularioPreAdopcion} />
                    },
                    {
                        path: `/adoptantes/:id/${adoptanteTabs.misAdopciones}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.misAdopciones} />
                    },
                    {
                        path: `/adoptantes/:id/${adoptanteTabs.misTurnos}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.misTurnos} />,
                        children: [
                            {
                                path: `/adoptantes/:id/${adoptanteTabs.misTurnos}/:turnoId`,
                                element: <TurnoDetalle />
                            }
                        ]
                    },
                    {
                        path: `/adoptantes/:id/${adoptanteTabs.seguimientos}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.seguimientos} />
                    },
                    {
                        path: "user/notifications",
                        element: <Notifications />
                    },
                    {
                        path: "/forum",
                        element: <Forum />
                    },
                    {
                        path: "/forum/missing",
                        element: <PostList />
                    },
                    {
                        path: "/forum/missing/:id",
                        element: <Missing />
                    },
                    {
                        path: "/forum/abandoned",
                        element: <PostList />
                    },
                    {
                        path: "/forum/abandoned/:id",
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
                    {
                        path: "/refugios/buscador",
                        element: <BuscadorDeRefugios />
                    }
                ],
            },
        ],
    },
]);