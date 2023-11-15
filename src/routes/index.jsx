import { createBrowserRouter, Navigate } from "react-router-dom";

// Home
import Bienvenida from "../components/home/Bienvenida";

// Adoptante
import Autenticacion from "../components/auth/Autenticacion";
import PanelDeUsuario from "../components/usuario/PanelDeUsuario";
import { AdopcionDetalle } from "../components/usuario/secciones/detalles/AdopcionDetalle";
import { TurnoDetalle } from "../components/usuario/secciones/detalles/TurnoDetalle";
import { SeguimientoDetalle } from "../components/usuario/secciones/detalles/SeguimientoDetalle";
import Notificaciones from "../components/usuario/Notificaciones";
import adoptanteTabs from '../config/usuario/adoptanteTabs.json';

// Administrador
import PanelDeAdministrador from "../components/usuario/administrador/PanelDeAdministrador";
import { ActivarUsuarios } from "../components/usuario/administrador/secciones/ActivarUsuarios";
import { AprobarComentarios } from "../components/usuario/administrador/secciones/AprobarComentarios";
import { ModerarForo } from "../components/usuario/administrador/secciones/ModerarForo";
import { ABMUsuarios } from "../components/usuario/administrador/secciones/ABMUsuarios";
import { PerfilAdministrador } from "../components/usuario/administrador/secciones/PerfilAdministrador";

// Refugio
import PanelDeRefugio from "../components/usuario/refugio/PanelDeRefugio";
import { PerfilDeRefugio } from "../components/usuario/refugio/secciones/PerfilDeRefugio";
import { SolicitudesDeAdopcion } from "../components/usuario/refugio/secciones/SolicitudesDeAdopcion";
import { SolicitudDetalle } from "../components/usuario/refugio/secciones/detalles/SolicitudDetalle";
import Turnos from "src/components/usuario/refugio/secciones/Turnos";
import { CrearTurno } from "src/components/usuario/refugio/secciones/CrearTurno";
import refugioUserTabs from "src/config/usuario/refugioUserTabs.json";

// Refugios
import ExplorarRefugios from '../components/refugio/ExplorarRefugios';
import RefugioDetalle from '../components/refugio/RefugioDetalle';

import Animales from "../components/refugio/secciones/Animales";
import Comentarios from "../components/refugio/secciones/Comentarios";
import VeterinariasAsociadas from "../components/refugio/secciones/VeterinariasAsociadas";
import MasInformacion from "../components/refugio/secciones/MasInformacion";
import shelterDb from '../components/helpers/sheltersDb.json';

import AnimalDetalle from "../components/refugio/secciones/AnimalDetalle";
import BuscadorDeRefugios from "../components/refugio/buscar/BuscadorDeRefugios";
import refugioTabs from '../config/refugio/refugioTabs.json';
import { refugioLoader } from "src/components/refugio/loaders/refugioLoader";

// Foro
import Forum from "../components/forum/Forum";
import Missing from "../components/forum/Missing";

// Componentes fijos

import LayoutPublic from "../components/layout/LayoutPublic";
import NotFound from '../components/errors/NotFound';
import Forbidden from "src/components/errors/Forbidden";
import PostList from "../components/forum/PostList";
import ExpiredSession from "src/components/errors/ExpiredSession";

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
                        element: <Bienvenida />
                    },
                    {
                        path: "/auth/signin",
                        element: <Autenticacion />
                    },
                    {
                        path: "/error/forbidden",
                        element: <Forbidden />
                    },
                    {
                        path: "/error/unauthorized",
                        element: <ExpiredSession />
                    },
                    {
                        path: `/adoptante/${adoptanteTabs.datosPersonales}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.datosPersonales} />
                    },
                    {
                        path: `/adoptante/${adoptanteTabs.misAdopciones}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.misAdopciones} title="Mis adopciones" />,
                        children: [
                            {
                                path: `/adoptante/${adoptanteTabs.misAdopciones}/:solicitudId`,
                                element: <AdopcionDetalle title="Detalles de la solicitud" />
                            }
                        ]
                    },
                    {
                        path: `/adoptante/${adoptanteTabs.misTurnos}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.misTurnos} title="Mis turnos" />,
                        children: [
                            {
                                path: `:turnoId`,
                                element: <TurnoDetalle title="Detalles del turno" />
                            }
                        ]
                    },
                    {
                        path: `/adoptante/${adoptanteTabs.seguimientos}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.seguimientos} />,
                        children: [
                            {
                                path: `/adoptante/${adoptanteTabs.seguimientos}/:seguimientoId`,
                                element: <SeguimientoDetalle />
                            }
                        ]
                    },
                    {
                        path: "usuarios/notificaciones",
                        element: <Notificaciones />
                    },
                    {
                        path: "/administradores/:id",
                        element: <PanelDeAdministrador />,
                        children: [
                            {
                                index: true,
                                element: <ActivarUsuarios title="Activar refugio/veterinaria" />
                            },
                            {
                                path: "activaciones",
                                element: <ActivarUsuarios title="Activar refugio/veterinaria" />
                            },
                            {
                                path: "aprobar-comentarios",
                                element: <AprobarComentarios title="Aprobar comentarios" />
                            },
                            {
                                path: "moderar-foro",
                                element: <ModerarForo title="Moderar foro" />
                            },
                            {
                                path: "abm-usuarios",
                                element: <ABMUsuarios title="ABM de usuarios" />
                            },
                            {
                                path: "datos-personales",
                                element: <PerfilAdministrador title="Datos personales" />
                            }
                        ]
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
                        path: "/refugios",
                        element: <ExplorarRefugios title="Explorar refugios" />
                    },
                    {
                        path: "/refugios/buscador",
                        element: <BuscadorDeRefugios />
                    },
                    {
                        path: "/refugios/:id/:seccion",
                        element: <RefugioDetalle />,
                        loader: refugioLoader,
                        children: [
                            {
                                path: ":animalId",
                                element: <AnimalDetalle title="Ver animal" />
                            }
                        ]
                    },
                    {
                        path: "/refugio",
                        element: <PanelDeRefugio />,
                        children: [
                            {
                                path: "perfil",
                                element: <PerfilDeRefugio title="Perfil de refugio" />
                            },
                            {
                                path: "solicitudes",
                                element: <SolicitudesDeAdopcion title="Solicitudes de adopción" />
                            },
                            {
                                path: "turnos",
                                element: <Turnos title="Turnos" />
                            }
                        ]
                    },
                    {
                        path: "/refugio/solicitudes/:solicitudId",
                        element: <SolicitudDetalle />,
                    },
                    {
                        path: "/refugio/solicitudes/:solicitudId/turnos",
                        element: <CrearTurno />,
                    }
                ],
            },
        ],
    },
]);