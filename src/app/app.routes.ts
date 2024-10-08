import { AuthenticatedGuard } from '@core/guards/Authenticated.guard';
import { Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/Auth.guard';
import { AdminGuard } from '@core/guards/Admin.guard';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: ()=> import('@features/login/login.component'),
    canActivate: [AuthenticatedGuard]

  },
  {
    path: 'Admin',
    title: 'Panel Administrador',
    loadComponent: ()=> import('@features/admin-dashboard/admin-dashboard.component'),
    children: [
          {
            path: 'Expedientes',
            loadComponent: ()=> import('@features/admin-dashboard/components/expediente/expediente.component'),
            children: [
              {
                path: 'Crear',
                loadComponent: ()=> import('@features/admin-dashboard/components/expediente/components/crear-expediente/crear-expediente.component')
              },
              {
                path: 'Tabla',
                loadComponent: ()=> import('@features/admin-dashboard/components/expediente/components/tabla/tabla.component')
              },
              {
                path: '',
                redirectTo: 'Tabla',
                pathMatch: 'full',
              }

            ]
          },
          {
            path: 'Apertura',
            loadComponent: ()=> import('@features/admin-dashboard/components/apertura/apertura.component')
          },
          {
            path: 'Inhibitorio',
            loadComponent: ()=> import('@features/admin-dashboard/components/inhibitorio/inhibitorio.component')
          },
          {
            path: 'Acumulacion',
            loadComponent: ()=> import('@features/admin-dashboard/components/auto-acumulacion/auto-acumulacion.component')
          },
          {
            path: 'Pruebas',
            loadComponent: ()=> import('@features/admin-dashboard/components/pruebas/pruebas.component')
          },
          {
            path: 'Aceptacion-cargos',
            loadComponent: ()=> import('@features/admin-dashboard/components/aceptacion-cargos/aceptacion-cargos.component')
          },
          {
            path: 'Fallo',
            loadComponent: ()=> import('@features/admin-dashboard/components/fallo/fallo.component')
          },
          {
            path: 'Recurso-primera-instancia',
            loadComponent: ()=> import('@features/admin-dashboard/components/recurso-primera-instancia/recurso-primera-instancia.component')
          },
          {
            path: 'Recurso-segunda-instancia',
            loadComponent: ()=> import('@features/admin-dashboard/components/recurso-segunda-instancia/recurso-segunda-instancia.component')
          },
          {
            path: 'Recurso-queja-revocatoria-directa',
            loadComponent: ()=> import('@features/admin-dashboard/components/recurso-queja-revocatoria-directa/recurso-queja-revocatoria-directa.component')
          },
          {
            path: 'Ejecutoria',
            loadComponent: ()=> import('@features/admin-dashboard/components/ejecutoria/ejecutoria.component')
          },
          {
            path: 'Gestion-cobro',
            loadComponent: ()=> import('@features/admin-dashboard/components/gestion-cobro/gestion-cobro.component')
          },
          {
            path: 'Ajuste-derecho-aclaratorio',
            loadComponent: ()=> import('@features/admin-dashboard/components/ajuste-derecho-aclaratorio/ajuste-derecho-aclaratorio.component')
          },
          {
            path: 'Estado',
            loadComponent: ()=> import('@features/admin-dashboard/components/estado/estado.component')
          },
          {
            path: 'Asignacion',
            loadComponent: ()=> import('@features/admin-dashboard/components/asignacion/asignacion.component')
          },
          {
            path: 'Pago-valor',
            loadComponent: ()=> import('@features/admin-dashboard/components/pago-valor/pago-valor.component')
          },
          {
            path: 'Solicitudes-especiales',
            loadComponent: ()=> import('@features/admin-dashboard/components/solicitudes-especiales/solicitudes-especiales.component')
          },
          {
            path: 'Estado-final',
            loadComponent: ()=> import('@features/admin-dashboard/components/estado-final/estado-final.component')
          },
          {
            path: 'Ubicacion-expediente',
            loadComponent: ()=> import('@features/admin-dashboard/components/ubicacion-expediente/ubicacion-expediente.component')
          },
          {
            path: 'Reporte',
            loadComponent: ()=> import('@features/admin-dashboard/components/Reporte/Reporte.component')
          },
          {
            path: 'Administrador-usuarios',
            loadComponent: ()=> import('@features/admin-dashboard/components/administrador-usuarios/administrador-usuarios.component')
          },
          {
            path: '',
            redirectTo: 'Expedientes',
            pathMatch: 'full',
          }
    ],
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'Viewer',
    title: 'Panel Usuario',
    loadComponent: ()=> import('@features/viewer-dashboard/viewer-dashboard.component'),
    children: [
          {
            path: 'Expedientes',
            loadComponent: ()=> import('@features/admin-dashboard/components/expediente/expediente.component'),
            children: [
              {
                path: 'Crear',
                loadComponent: ()=> import('@features/admin-dashboard/components/expediente/components/crear-expediente/crear-expediente.component')
              },
              {
                path: 'Tabla',
                loadComponent: ()=> import('@features/admin-dashboard/components/expediente/components/tabla/tabla.component')
              },
              {
                path: '',
                redirectTo: 'Tabla',
                pathMatch: 'full',
              }

            ]
          },
          {
            path: 'Apertura',
            loadComponent: ()=> import('@features/admin-dashboard/components/apertura/apertura.component')
          },
          {
            path: 'Inhibitorio',
            loadComponent: ()=> import('@features/admin-dashboard/components/inhibitorio/inhibitorio.component')
          },
          {
            path: 'Acumulacion',
            loadComponent: ()=> import('@features/admin-dashboard/components/auto-acumulacion/auto-acumulacion.component')
          },
          {
            path: 'Pruebas',
            loadComponent: ()=> import('@features/admin-dashboard/components/pruebas/pruebas.component')
          },
          {
            path: 'Aceptacion-cargos',
            loadComponent: ()=> import('@features/admin-dashboard/components/aceptacion-cargos/aceptacion-cargos.component')
          },
          {
            path: 'Fallo',
            loadComponent: ()=> import('@features/admin-dashboard/components/fallo/fallo.component')
          },
          {
            path: 'Recurso-primera-instancia',
            loadComponent: ()=> import('@features/admin-dashboard/components/recurso-primera-instancia/recurso-primera-instancia.component')
          },
          {
            path: 'Recurso-segunda-instancia',
            loadComponent: ()=> import('@features/admin-dashboard/components/recurso-segunda-instancia/recurso-segunda-instancia.component')
          },
          {
            path: 'Recurso-queja-revocatoria-directa',
            loadComponent: ()=> import('@features/admin-dashboard/components/recurso-queja-revocatoria-directa/recurso-queja-revocatoria-directa.component')
          },
          {
            path: 'Ejecutoria',
            loadComponent: ()=> import('@features/admin-dashboard/components/ejecutoria/ejecutoria.component')
          },
          {
            path: 'Gestion-cobro',
            loadComponent: ()=> import('@features/admin-dashboard/components/gestion-cobro/gestion-cobro.component')
          },
          {
            path: 'Ajuste-derecho-aclaratorio',
            loadComponent: ()=> import('@features/admin-dashboard/components/ajuste-derecho-aclaratorio/ajuste-derecho-aclaratorio.component')
          },
          {
            path: 'Estado',
            loadComponent: ()=> import('@features/admin-dashboard/components/estado/estado.component')
          },
          {
            path: 'Asignacion',
            loadComponent: ()=> import('@features/admin-dashboard/components/asignacion/asignacion.component')
          },
          {
            path: 'Pago-valor',
            loadComponent: ()=> import('@features/admin-dashboard/components/pago-valor/pago-valor.component')
          },
          {
            path: 'Solicitudes-especiales',
            loadComponent: ()=> import('@features/admin-dashboard/components/solicitudes-especiales/solicitudes-especiales.component')
          },
          {
            path: 'Estado-final',
            loadComponent: ()=> import('@features/admin-dashboard/components/estado-final/estado-final.component')
          },
          {
            path: 'Ubicacion-expediente',
            loadComponent: ()=> import('@features/admin-dashboard/components/ubicacion-expediente/ubicacion-expediente.component')
          },
          {
            path: 'Administrador-usuarios',
            loadComponent: ()=> import('@features/admin-dashboard/components/administrador-usuarios/administrador-usuarios.component')
          },
          {
            path: '',
            redirectTo: 'Expedientes',
            pathMatch: 'full',
          }
    ],
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path: 'Editor',
    title: 'Panel Usuario',
    loadComponent: ()=> import('@features/editor-dashboard/editor-dashboard.component'),
    children: [
          {
            path: 'Expedientes',
            loadComponent: ()=> import('@features/admin-dashboard/components/expediente/expediente.component'),
            children: [
              {
                path: 'Crear',
                loadComponent: ()=> import('@features/admin-dashboard/components/expediente/components/crear-expediente/crear-expediente.component')
              },
              {
                path: 'Tabla',
                loadComponent: ()=> import('@features/admin-dashboard/components/expediente/components/tabla/tabla.component')
              },
              {
                path: '',
                redirectTo: 'Tabla',
                pathMatch: 'full',
              }

            ]
          },
          {
            path: 'Apertura',
            loadComponent: ()=> import('@features/admin-dashboard/components/apertura/apertura.component')
          },
          {
            path: 'Inhibitorio',
            loadComponent: ()=> import('@features/admin-dashboard/components/inhibitorio/inhibitorio.component')
          },
          {
            path: 'Acumulacion',
            loadComponent: ()=> import('@features/admin-dashboard/components/auto-acumulacion/auto-acumulacion.component')
          },
          {
            path: 'Pruebas',
            loadComponent: ()=> import('@features/admin-dashboard/components/pruebas/pruebas.component')
          },
          {
            path: 'Aceptacion-cargos',
            loadComponent: ()=> import('@features/admin-dashboard/components/aceptacion-cargos/aceptacion-cargos.component')
          },
          {
            path: 'Fallo',
            loadComponent: ()=> import('@features/admin-dashboard/components/fallo/fallo.component')
          },
          {
            path: 'Recurso-primera-instancia',
            loadComponent: ()=> import('@features/admin-dashboard/components/recurso-primera-instancia/recurso-primera-instancia.component')
          },
          {
            path: 'Recurso-segunda-instancia',
            loadComponent: ()=> import('@features/admin-dashboard/components/recurso-segunda-instancia/recurso-segunda-instancia.component')
          },
          {
            path: 'Recurso-queja-revocatoria-directa',
            loadComponent: ()=> import('@features/admin-dashboard/components/recurso-queja-revocatoria-directa/recurso-queja-revocatoria-directa.component')
          },
          {
            path: 'Ejecutoria',
            loadComponent: ()=> import('@features/admin-dashboard/components/ejecutoria/ejecutoria.component')
          },
          {
            path: 'Gestion-cobro',
            loadComponent: ()=> import('@features/admin-dashboard/components/gestion-cobro/gestion-cobro.component')
          },
          {
            path: 'Ajuste-derecho-aclaratorio',
            loadComponent: ()=> import('@features/admin-dashboard/components/ajuste-derecho-aclaratorio/ajuste-derecho-aclaratorio.component')
          },
          {
            path: 'Estado',
            loadComponent: ()=> import('@features/admin-dashboard/components/estado/estado.component')
          },
          {
            path: 'Asignacion',
            loadComponent: ()=> import('@features/admin-dashboard/components/asignacion/asignacion.component')
          },
          {
            path: 'Pago-valor',
            loadComponent: ()=> import('@features/admin-dashboard/components/pago-valor/pago-valor.component')
          },
          {
            path: 'Solicitudes-especiales',
            loadComponent: ()=> import('@features/admin-dashboard/components/solicitudes-especiales/solicitudes-especiales.component')
          },
          {
            path: 'Estado-final',
            loadComponent: ()=> import('@features/admin-dashboard/components/estado-final/estado-final.component')
          },
          {
            path: 'Ubicacion-expediente',
            loadComponent: ()=> import('@features/admin-dashboard/components/ubicacion-expediente/ubicacion-expediente.component')
          },
          {
            path: 'Administrador-usuarios',
            loadComponent: ()=> import('@features/admin-dashboard/components/administrador-usuarios/administrador-usuarios.component')
          },
          {
            path: '',
            redirectTo: 'Expedientes',
            pathMatch: 'full',
          }
    ],
    canActivate: [AuthGuard,AdminGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },

];
