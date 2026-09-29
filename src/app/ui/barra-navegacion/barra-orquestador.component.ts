import { afterNextRender, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
    <!-- Barra Superior Flotante Tipo Pill con Diseño Corporativo GADU y Accesos Funcionales del Orquestador -->
    <header class="sticky top-3 sm:top-5 lg:top-7 z-50 w-full px-2.5 sm:px-6 lg:px-8 transition-all duration-200 no-print print:hidden">
      <div class="max-w-[1360px] mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-slate-200/90 shadow-lg shadow-slate-200/50 px-3.5 sm:px-6 lg:px-7 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 sm:gap-3">
        
        <!-- ======================================================================= -->
        <!-- 1. BLOQUE IZQUIERDO: LOGOTIPO CORPORATIVO + IDENTIFICADOR ORQUESTADOR   -->
        <!-- ======================================================================= -->
        <div class="flex items-center shrink-0">
          <a routerLink="/" class="flex items-center group py-0.5 select-none" title="Ir al Inicio del Orquestador">
            <img 
              src="assets/logos/GADUCompany.png" 
              alt="GADU Company S.A." 
              class="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              onerror="this.src='favicon.ico'"
            />
          </a>

          <!-- Separador vertical -->
          <div class="h-7 sm:h-8 w-px bg-slate-200 ml-3 mr-2 sm:ml-4 sm:mr-3 hidden sm:block"></div>

          <!-- Badge Funcional: Host Shell Orquestador -->
          <span class="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#0078D4] border border-blue-200/80">
            <span class="w-1.5 h-1.5 rounded-full bg-[#0078D4] animate-pulse"></span>
            <span>Orquestador</span>
          </span>
        </div>

        <!-- ======================================================================= -->
        <!-- 2. BLOQUE CENTRAL: NAVEGACIÓN FUNCIONAL DEL ORQUESTADOR (>= 1024px)     -->
        <!-- ======================================================================= -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
          
          <!-- Enlace: Dashboard / Inicio -->
          <a 
            routerLink="/" 
            routerLinkActive="bg-sky-100/90 text-[#0078D4] font-bold shadow-2xs" 
            [routerLinkActiveOptions]="{ exact: true }"
            class="px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0078D4] hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
          >
            <i data-lucide="layout-dashboard" class="w-4 h-4 text-[#0078D4]"></i>
            <span>Dashboard</span>
          </a>

          <!-- Enlace: Tienda Federada en Shell -->
          <a 
            routerLink="/tienda" 
            routerLinkActive="bg-sky-100/90 text-[#0078D4] font-bold shadow-2xs" 
            class="px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0078D4] hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
          >
            <i data-lucide="shopping-bag" class="w-4 h-4 text-[#0078D4]"></i>
            <span>Tienda en Shell</span>
          </a>

          <!-- Enlace: Monitor de Salud & Telemetría -->
          <a 
            routerLink="/monitor" 
            routerLinkActive="bg-sky-100/90 text-[#0078D4] font-bold shadow-2xs" 
            class="px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0078D4] hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
          >
            <i data-lucide="activity" class="w-4 h-4 text-[#0078D4]"></i>
            <span>Monitor de Salud</span>
          </a>

          <!-- Menú Desplegable: Ecosistema de Microfrontends -->
          <div class="relative group">
            <button 
              type="button"
              class="px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0078D4] hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <i data-lucide="layers" class="w-4 h-4 text-slate-700 group-hover:text-[#0078D4]"></i>
              <span>Ecosistema</span>
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0078D4] transition-transform duration-200 group-hover:rotate-180"></i>
            </button>

            <!-- Panel Flotante del Ecosistema -->
            <div class="absolute top-full left-0 pt-2 z-50 w-80 pointer-events-none group-hover:pointer-events-auto opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div class="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 space-y-1">
                <div class="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Microfrontends & Nodos Federados
                </div>

                <!-- 1. GADU App Commerce -->
                <a routerLink="/tienda" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="shopping-bag" class="w-4 h-4 text-[#0078D4] shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span>GADU App Commerce</span>
                      <span class="text-[9px] px-1.5 py-0.5 bg-blue-100 text-[#0078D4] rounded-full font-bold">Shell</span>
                    </div>
                    <div class="text-[11px] text-slate-500">Tienda virtual embebida en el host</div>
                  </div>
                </a>

                <!-- 2. GADU Company Portal -->
                <a href="https://www.gaducompany.com" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="globe" class="w-4 h-4 text-[#0369A1] shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span>GADU Company Portal</span>
                      <i data-lucide="external-link" class="w-3 h-3 text-slate-400"></i>
                    </div>
                    <div class="text-[11px] text-slate-500">Portal corporativo y servicios multi-cloud</div>
                  </div>
                </a>

                <!-- 3. GADU POS System -->
                <a href="https://gadu-pos-system.vercel.app" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="receipt" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span>GADU POS System</span>
                      <i data-lucide="external-link" class="w-3 h-3 text-slate-400"></i>
                    </div>
                    <div class="text-[11px] text-slate-500">Punto de venta y facturación en mostrador</div>
                  </div>
                </a>

                <!-- 4. GADU API Gateway -->
                <a routerLink="/monitor" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="server" class="w-4 h-4 text-purple-600 shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span>API Gateway & Microservicios</span>
                    </div>
                    <div class="text-[11px] text-slate-500">Node.js / .NET Minimal APIs & Redis SSE</div>
                  </div>
                </a>

                <div class="pt-2 border-t border-slate-100">
                  <a routerLink="/monitor" class="px-3 py-1.5 rounded-lg text-xs font-bold text-[#0078D4] hover:bg-blue-50 flex items-center justify-between transition-colors">
                    <span>Ver telemetría y salud de nodos</span>
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </nav>

        <!-- ======================================================================= -->
        <!-- 3. BLOQUE DERECHO: ACCIONES FUNCIONALES DEL ORQUESTADOR                 -->
        <!-- ======================================================================= -->
        <div class="flex items-center gap-1.5 sm:gap-2 xl:gap-3 shrink-0">
          
          <!-- Píldora Esmeralda: Enlace a Tienda Externa (www.gaduapp.com) -->
          <a 
            href="https://www.gaduapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="hidden md:flex border border-emerald-300/80 bg-emerald-50/50 hover:bg-emerald-100/60 transition-all rounded-full px-3 sm:px-3.5 lg:px-4 py-1.5 sm:py-2 items-center gap-1.5 sm:gap-2 shadow-2xs group cursor-pointer"
            title="Abrir tienda virtual autónoma www.gaduapp.com"
          >
            <i data-lucide="shopping-cart" class="w-4 h-4 text-emerald-600 transition-transform group-hover:scale-110"></i>
            <span class="text-xs sm:text-sm font-bold text-slate-800">GADU App</span>
            <span class="hidden xl:inline-block bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200/60">Tienda Web</span>
          </a>

          <!-- Indicador Dinámico de Entorno: Cloud / Local -->
          <span 
            class="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-semibold"
            [title]="servicioOrquestador.esEntornoNube() ? 'Host desplegado en Vercel Edge' : 'Host en servidor de desarrollo local'"
          >
            <span class="w-2 h-2 rounded-full" [class.bg-emerald-500]="servicioOrquestador.esEntornoNube()" [class.bg-blue-500]="!servicioOrquestador.esEntornoNube()"></span>
            <span>{{ servicioOrquestador.esEntornoNube() ? 'Vercel Edge' : 'Local :4200' }}</span>
          </span>

          <!-- Botón Primario: Acceso al Portal Corporativo Oficial -->
          <a 
            href="https://www.gaducompany.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-[#0078D4] hover:bg-[#0062AD] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full flex items-center gap-1 sm:gap-1.5 shadow-sm shadow-blue-500/20 hover:shadow-md hover:shadow-blue-500/30 transition-all cursor-pointer"
            title="Ir al Portal Oficial de GADU Company"
          >
            <i data-lucide="globe" class="w-3.5 h-3.5"></i>
            <span>Portal Web</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </a>

          <!-- Botón Hamburguesa: Menú en Móviles y Tablets (< 1024px) -->
          <button 
            type="button" 
            (click)="alternarMenuMovil()"
            class="lg:hidden p-2 rounded-full bg-slate-100 text-slate-700 hover:text-[#0078D4] focus:outline-none cursor-pointer transition-colors"
            aria-label="Alternar Menú del Orquestador"
          >
            <i [attr.data-lucide]="menuMovilAbierto() ? 'x' : 'menu'" class="w-5 h-5"></i>
          </button>
        </div>

      </div>

      <!-- ======================================================================= -->
      <!-- 4. PANEL DESPLEGABLE MÓVIL Y TABLET (< 1024px)                          -->
      <!-- ======================================================================= -->
      @if (menuMovilAbierto()) {
        <div class="lg:hidden mt-2.5 max-w-[1360px] mx-auto bg-white/98 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/90 p-3 sm:p-5 space-y-3 shadow-2xl transition-all">
          <div class="flex flex-col gap-1">
            <a 
              routerLink="/" 
              (click)="cerrarMenuMovil()"
              routerLinkActive="bg-sky-50 text-[#0078D4] font-bold" 
              [routerLinkActiveOptions]="{ exact: true }"
              class="px-3.5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2.5 hover:bg-slate-50"
            >
              <i data-lucide="layout-dashboard" class="w-4 h-4 text-[#0078D4]"></i>
              <div class="flex flex-col">
                <span>Dashboard Principal</span>
                <span class="text-[10px] text-slate-400 font-normal">Vista general del Orquestador</span>
              </div>
            </a>

            <a 
              routerLink="/tienda" 
              (click)="cerrarMenuMovil()"
              routerLinkActive="bg-sky-50 text-[#0078D4] font-bold" 
              class="px-3.5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2.5 hover:bg-slate-50"
            >
              <i data-lucide="shopping-bag" class="w-4 h-4 text-[#0078D4]"></i>
              <div class="flex flex-col">
                <span>Tienda en Shell</span>
                <span class="text-[10px] text-slate-400 font-normal">Microfrontend de GADU App Commerce</span>
              </div>
            </a>

            <a 
              routerLink="/monitor" 
              (click)="cerrarMenuMovil()"
              routerLinkActive="bg-sky-50 text-[#0078D4] font-bold"
              class="px-3.5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2.5 hover:bg-slate-50"
            >
              <i data-lucide="activity" class="w-4 h-4 text-[#0078D4]"></i>
              <div class="flex flex-col">
                <span>Monitor de Salud & Nodos</span>
                <span class="text-[10px] text-slate-400 font-normal">Telemetría de latencias y estado de APIs</span>
              </div>
            </a>

            <a 
              href="https://gadu-pos-system.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-3.5 py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2.5 hover:bg-slate-50"
            >
              <i data-lucide="receipt" class="w-4 h-4 text-emerald-600"></i>
              <div class="flex flex-col">
                <span>GADU POS System</span>
                <span class="text-[10px] text-slate-400 font-normal">SaaS en nube de facturación e inventario</span>
              </div>
            </a>
          </div>

          <div class="pt-3 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
            <a 
              href="https://www.gaduapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 py-2.5 px-3.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:bg-emerald-100 transition-colors"
            >
              <i data-lucide="shopping-cart" class="w-4 h-4 text-emerald-600"></i>
              <span>Tienda www.gaduapp.com</span>
            </a>

            <a 
              href="https://www.gaducompany.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 py-2.5 px-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <i data-lucide="globe" class="w-4 h-4 text-[#0078D4]"></i>
              <span>Portal www.gaducompany.com</span>
            </a>
          </div>
        </div>
      }
    </header>
  `
})
export class BarraOrquestadorComponent {
  public readonly servicioOrquestador = inject(EstadoOrquestadorService);
  public readonly menuMovilAbierto = signal<boolean>(false);

  constructor() {
    afterNextRender(() => {
      inicializarIconosLucide();
    });
  }

  public alternarMenuMovil(): void {
    this.menuMovilAbierto.update(v => !v);
    setTimeout(() => inicializarIconosLucide(), 50);
  }

  public cerrarMenuMovil(): void {
    this.menuMovilAbierto.set(false);
  }
}
