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
                        element: <Bienvenida />
                    },
                    {
                        path: "/auth/signin",
                        element: <Autenticacion />
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
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.misAdopciones} />,
                        children: [
                            {
                                path: `/adoptantes/:id/${adoptanteTabs.misAdopciones}/:solicitudId`,
                                element: <AdopcionDetalle />
                            }
                        ]
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
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.seguimientos} />,
                        children: [
                            {
                                path: `/adoptantes/:id/${adoptanteTabs.seguimientos}/:seguimientoId`,
                                element: <SeguimientoDetalle />
                            }
                        ]
                    },
                    {
                        path: `/adoptantes/:id/${adoptanteTabs.seguimientos}`,
                        element: <PanelDeUsuario tabs={adoptanteTabs} seccionActiva={adoptanteTabs.seguimientos} />
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
                        path: "/refugios/:id",
                        element: <RefugioDetalle />,
                        children: [
                            {
                                path: "animales",
                                element: <Animales title="Animales en el refugio" />,
                                children: [
                                    {
                                        path: ":animalId",
                                        element: <AnimalDetalle title="Ver animal" />
                                    }
                                ]
                            },
                            {
                                path: "comentarios",
                                element: <Comentarios title="Comentarios del refugio" />
                            },
                            {
                                path: "veterinarias-asociadas",
                                element: <VeterinariasAsociadas title="Veterinarias asociadas del refugio" />
                            },
                            {
                                path: "mas-informacion",
                                element: <MasInformacion shelterDb={shelterDb} title="Más información del refugio" />
                            }
                        ]
                    },
                    {
                        path: "/usuarios/:id",
                        element: <PanelDeRefugio />,
                        children: [
                            {
                                path: "perfil",
                                element: <PerfilDeRefugio />
                            },
                            {
                                path: "solicitudes-de-adopcion",
                                element: <SolicitudesDeAdopcion />
                            }
                        ]
                    },
                    {
                        path: "/usuarios/:id/solicitudes-de-adopcion/:solicitudId",
                        element: <SolicitudDetalle />,
                    }
                    /*{
                        path: "/refugios/:id",
                        element: <RefugioDetalle tabs={refugioTabs} tabActiva={refugioTabs.animales} />,
                        children: [
                            {
                                path: "/refugios/:id/publicacion/:postid", // es obligatorio que lo combine el path padre
                                element: <AnimalDetalle />
                            }
                        ]
                    },
                    {
                        path: "/refugios/:id/animales",
                        element: <RefugioDetalle tabs={refugioTabs} tabActiva={refugioTabs.animales} title="Refugio" />,
                        children: [
                            {
                                path: "/refugios/:id/animales/:animalId", // es obligatorio que lo combine el path padre
                                element: <AnimalDetalle />
                            }
                        ]
                    },
                    {
                        path: "/refugios/:id/comentarios",
                        element: <RefugioDetalle tabs={refugioTabs} tabActiva={refugioTabs.comentarios} />
                    },
                    {
                        path: "/refugios/:id/veterinarias-asociadas",
                        element: <RefugioDetalle tabs={refugioTabs} tabActiva={refugioTabs.veterinariasAsociadas} />
                    },
                    {
                        path: "/refugios/:id/mas-informacion",
                        element: <RefugioDetalle tabs={refugioTabs} tabActiva={refugioTabs.masInformacion} />
                    },*/
                    /*{
                        path: "/refugios/buscador",
                        element: <BuscadorDeRefugios />
                    }*/
                ],
            },
        ],
    },
]);