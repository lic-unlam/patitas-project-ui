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
import { TurnoDetalleRefugio } from "src/components/usuario/refugio/secciones/detalles/TurnoDetalleRefugio";

// Veterinaria
import PanelDeVeterinaria from "src/components/usuario/veterinaria/PanelDeVeterinaria";
import { PerfilDeVeterinaria } from "src/components/usuario/veterinaria/secciones/PerfilDeVeterinaria";
import { SeguimientosDeVacunacion } from "src/components/usuario/veterinaria/secciones/SeguimientosDeVacunacion";
import { PlanesDeVacunacion } from "src/components/usuario/veterinaria/secciones/PlanesDeVacunacion";
import { AdopcionesVinculadas } from "src/components/usuario/veterinaria/secciones/AdopcionesVinculadas";
import { AdopcionVinculadaDetalle } from "src/components/usuario/veterinaria/secciones/detalles/AdopcionVinculadaDetalle";

// Refugios
import ExplorarRefugios from '../components/refugio/ExplorarRefugios';
import RefugioDetalle from '../components/refugio/RefugioDetalle';

import AnimalDetalle from "../components/refugio/secciones/AnimalDetalle";
import BuscadorDeRefugios from "../components/refugio/buscar/BuscadorDeRefugios";
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
                        path: `/adoptante/${adoptanteTabs.misSeguimientos}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.misSeguimientos} />,
                        children: [
                            {
                                path: `/adoptante/${adoptanteTabs.misSeguimientos}/:seguimientoId`,
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
                                element: <Turnos title="Turnos" />,
                                children: [
                                    {
                                        path: ":turnoId",
                                        element: <TurnoDetalleRefugio title="Detalles del turno" />
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        path: "/refugio/solicitudes/:solicitudId",
                        element: <SolicitudDetalle title="Detalle de solicitud" />,
                    },
                    {
                        path: "/refugio/solicitudes/:solicitudId/turnos",
                        element: <CrearTurno />,
                    },
                    {
                        path: "/veterinaria",
                        element: <PanelDeVeterinaria />,
                        children: [
                            {
                                path: "perfil",
                                element: <PerfilDeVeterinaria title="Perfil de veterinaria" />
                            },
                            {
                                path: "seguimientos-de-vacunacion",
                                element: <SeguimientosDeVacunacion title="Seguimientos de vacunación" />
                            },
                            {
                                path: "planes-de-vacunacion",
                                element: <PlanesDeVacunacion title="Planes de vacunación" />
                            },
                            {
                                path: ":solicitudId",
                                element: <AdopcionVinculadaDetalle title="Detalle de adopción vinculada" />
                            },
                            {
                                path: "adopciones-vinculadas",
                                element: <AdopcionesVinculadas title="Adopciones vinculadas" />
                            },
                            {
                                path: "/veterinaria/adopciones-vinculadas/:solicitudId",
                                element: <AdopcionVinculadaDetalle title="Detalle de adopción vinculada" />
                            }
                        ]
                    }
                ],
            },
        ],
    },
]);