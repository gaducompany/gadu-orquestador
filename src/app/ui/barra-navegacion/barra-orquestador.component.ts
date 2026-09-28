import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EstadoOrquestadorService } from '../../aplicacion/estado-orquestador.service';
import { inicializarIconosLucide } from '../../comun/lucide';

@Component({
  selector: 'app-barra-orquestador',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        <!-- Logo Oficial y Título del Orquestador -->
        <div class="flex items-center gap-3">
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="bg-white px-2.5 py-1.5 rounded-xl shadow-xs flex items-center transition-transform group-hover:scale-105">
              <img 
                src="assets/logos/GADUCompany.png" 
                alt="GADU Company S.A." 
                class="h-7 sm:h-8 w-auto object-contain"
                onerror="this.src='favicon.ico'"
              />
            </div>
            <div class="border-l border-slate-700 pl-3">
              <span class="font-extrabold text-sm sm:text-base tracking-tight block text-white leading-tight">GADU ORQUESTADOR</span>
              <span class="text-[10px] text-blue-400 font-semibold block tracking-wider uppercase mt-0.5">Plataforma Microfrontends</span>
            </div>
          </a>

          <!-- Badge de Versión y Arquitectura -->
          <span class="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700 ml-2">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Angular 20+ Zoneless
          </span>
        </div>

        <!-- Enlaces de Navegación del Orquestador -->
        <nav class="flex items-center gap-1 sm:gap-2">
          <a 
            routerLink="/" 
            routerLinkActive="bg-slate-800 text-blue-400 font-bold border-slate-700" 
            [routerLinkActiveOptions]="{ exact: true }"
            class="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors border border-transparent flex items-center gap-1.5">
            <i data-lucide="layout-grid" class="w-3.5 h-3.5"></i>
            <span>Inicio / Hub</span>
          </a>

          <a 
            routerLink="/tienda" 
            routerLinkActive="bg-blue-600 text-white font-bold border-blue-500 shadow-md shadow-blue-600/30" 
            class="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors border border-transparent flex items-center gap-1.5">
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
            <span>Tienda E-Commerce</span>
          </a>

          <a 
            routerLink="/monitor" 
            routerLinkActive="bg-slate-800 text-blue-400 font-bold border-slate-700" 
            class="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors border border-transparent flex items-center gap-1.5">
            <i data-lucide="activity" class="w-3.5 h-3.5"></i>
            <span>Monitor de Salud</span>
          </a>
        </nav>

        <!-- Indicador de Microfrontend Activo -->
        <div class="hidden sm:flex items-center gap-3">
          <div class="text-right">
            <span class="block text-[10px] text-slate-400 uppercase font-semibold">Microfrontend Seleccionado</span>
            <span class="block text-xs font-bold text-white">{{ servicioOrquestador.microfrontendActivo().nombre }}</span>
          </div>

          <a 
            [href]="servicioOrquestador.microfrontendActivo().dominioProduccion" 
            target="_blank"
            rel="noopener noreferrer"
            title="Abrir en dominio independiente www.gaduapp.com"
            class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 flex items-center justify-center">
            <i data-lucide="external-link" class="w-4 h-4"></i>
          </a>
        </div>

      </div>
    </header>
  `
})
export class BarraOrquestadorComponent {
  public readonly servicioOrquestador = inject(EstadoOrquestadorService);

  constructor() {
    afterNextRender(() => {
      inicializarIconosLucide();
    });
  }
}
