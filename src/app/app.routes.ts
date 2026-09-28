import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./ui/paginas/inicio-orquestador.component').then(m => m.InicioOrquestadorComponent),
    title: 'GADU Orquestador'
  },
  {
    path: 'tienda',
    loadComponent: () => import('./ui/paginas/contenedor-tienda.component').then(m => m.ContenedorTiendaComponent),
    title: 'Tienda GADU Commerce'
  },
  {
    path: 'monitor',
    loadComponent: () => import('./ui/paginas/monitor-salud.component').then(m => m.MonitorSaludComponent),
    title: 'Monitor de Salud | GADU Orquestador'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
