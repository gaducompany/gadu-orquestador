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
    <!-- Barra Superior Flotante Tipo Pill Corporativa GADU (Separada del Borde Superior) -->
    <header class="sticky top-4 sm:top-6 lg:top-7 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-1 transition-all duration-200">
      <div class="max-w-[1380px] mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-slate-200/90 shadow-lg shadow-slate-200/60 px-5 sm:px-7 lg:px-8 py-3.5 sm:py-4 min-h-[76px] sm:min-h-[80px] flex items-center justify-between gap-3 sm:gap-4">
        
        <!-- ======================================================================= -->
        <!-- 1. LOGOTIPO CORPORATIVO GADU COMPANY + SEPARADOR VERTICAL               -->
        <!-- ======================================================================= -->
        <div class="flex items-center shrink-0">
          <a routerLink="/" class="flex items-center group py-0.5">
            <img 
              src="assets/logos/GADUCompany.png" 
              alt="GADU Company S.A." 
              class="h-9 sm:h-10 lg:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              onerror="this.src='favicon.ico'"
            />
          </a>

          <!-- Separador vertical elegante como en el portal corporativo -->
          <div class="h-8 w-px bg-slate-200 ml-4 mr-2 lg:ml-5 lg:mr-3 hidden xl:block"></div>
        </div>

        <!-- ======================================================================= -->
        <!-- 2. NAVEGACIÓN PRINCIPAL DE ESCRITORIO (SIMÉTRICA Y ESPACIOSA)           -->
        <!-- ======================================================================= -->
        <nav class="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
          
          <!-- Enlace: Inicio (Pill Celeste Activo) -->
          <a 
            routerLink="/" 
            routerLinkActive="bg-[#E1F0FF] text-[#0078D4] font-bold shadow-2xs" 
            [routerLinkActiveOptions]="{ exact: true }"
            class="px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-[15px] font-semibold text-slate-700 hover:text-[#0078D4] hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer"
          >
            <i data-lucide="home" class="w-4 h-4 text-[#0078D4]"></i>
            <span>Inicio</span>
          </a>

          <!-- Menú Desplegable: GADU Tech -->
          <div class="relative group">
            <a 
              href="https://www.gaducompany.com" 
              target="_blank"
              class="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-[15px] font-semibold text-slate-700 hover:text-[#0078D4] hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <i data-lucide="laptop" class="w-4 h-4 text-slate-700 group-hover:text-[#0078D4]"></i>
              <span>GADU Tech</span>
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0078D4] transition-transform duration-200 group-hover:rotate-180"></i>
            </a>

            <!-- Submenú Flotante GADU Tech -->
            <div class="absolute top-full left-0 pt-2 z-50 w-72 pointer-events-none group-hover:pointer-events-auto opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div class="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 space-y-1">
                <div class="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Cloud & Infraestructura
                </div>
                <a href="https://www.gaducompany.com" target="_blank" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="cloud" class="w-4 h-4 text-[#0078D4] shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Consultoría Multi-Cloud</div>
                    <div class="text-[11px] text-slate-500">Azure, AWS, GCP y centros en Colombia</div>
                  </div>
                </a>
                <a href="https://gadu-pos-system.vercel.app" target="_blank" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="zap" class="w-4 h-4 text-[#0078D4] shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900">GADU POS System</div>
                    <div class="text-[11px] text-slate-500">SaaS en nube de cobro e inventario</div>
                  </div>
                </a>
                <a routerLink="/monitor" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="activity" class="w-4 h-4 text-[#0078D4] shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Monitor Orquestador</div>
                    <div class="text-[11px] text-slate-500">Telemetría de salud y microservicios</div>
                  </div>
                </a>
                <div class="pt-2 border-t border-slate-100">
                  <a href="https://www.gaducompany.com" target="_blank" class="px-3 py-1.5 rounded-lg text-xs font-bold text-[#0078D4] hover:bg-blue-50 flex items-center justify-between transition-colors">
                    <span>Ver portafolio Tech completo</span>
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Menú Desplegable: GADU Commerce -->
          <div class="relative group">
            <a 
              href="https://www.gaduapp.com" 
              target="_blank"
              class="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-[15px] font-semibold text-slate-700 hover:text-[#0078D4] hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <i data-lucide="box" class="w-4 h-4 text-slate-700 group-hover:text-[#0078D4]"></i>
              <span>GADU Commerce</span>
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0078D4] transition-transform duration-200 group-hover:rotate-180"></i>
            </a>

            <!-- Submenú Flotante GADU Commerce -->
            <div class="absolute top-full left-0 pt-2 z-50 w-72 pointer-events-none group-hover:pointer-events-auto opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div class="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 space-y-1">
                <div class="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Hardware & Suministro B2B
                </div>
                <a routerLink="/tienda" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="shopping-bag" class="w-4 h-4 text-[#0078D4] shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Embeber Tienda en Orquestador</div>
                    <div class="text-[11px] text-slate-500">GADU App Commerce v2</div>
                  </div>
                </a>
                <a href="https://www.gaduapp.com" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="monitor" class="w-4 h-4 text-[#0078D4] shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Tienda www.gaduapp.com</div>
                    <div class="text-[11px] text-slate-500">Laptops, POS y equipamiento empresarial</div>
                  </div>
                </a>
                <div class="pt-2 border-t border-slate-100">
                  <a href="https://www.gaduapp.com" target="_blank" class="px-3 py-1.5 rounded-lg text-xs font-bold text-[#0078D4] hover:bg-sky-50 flex items-center justify-between transition-colors">
                    <span>Comprar en GADU App (Tienda)</span>
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Menú Desplegable: GADU Coach -->
          <div class="relative group">
            <a 
              href="https://www.gaducompany.com" 
              target="_blank"
              class="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-sm sm:text-[15px] font-semibold text-slate-700 hover:text-[#0078D4] hover:bg-slate-50 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <i data-lucide="graduation-cap" class="w-4 h-4 text-slate-700 group-hover:text-[#0078D4]"></i>
              <span>GADU Coach</span>
              <i data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0078D4] transition-transform duration-200 group-hover:rotate-180"></i>
            </a>

            <!-- Submenú Flotante GADU Coach -->
            <div class="absolute top-full left-0 pt-2 z-50 w-72 pointer-events-none group-hover:pointer-events-auto opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
              <div class="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 space-y-1">
                <div class="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Capacitación & Cultura
                </div>
                <a href="https://www.gaducompany.com" target="_blank" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="shield-check" class="w-4 h-4 text-[#7E22CE] shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Cultura de Ciberseguridad</div>
                    <div class="text-[11px] text-slate-500">Anti-Phishing, 2FA y navegación segura</div>
                  </div>
                </a>
                <a href="https://www.gaducompany.com" target="_blank" class="px-3 py-2 rounded-xl hover:bg-slate-50 flex items-start gap-2.5 transition-colors">
                  <i data-lucide="laptop" class="w-4 h-4 text-[#7E22CE] shrink-0 mt-0.5"></i>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Productividad en Oficina</div>
                    <div class="text-[11px] text-slate-500">Microsoft 365, Workspace y hojas de cálculo</div>
                  </div>
                </a>
                <div class="pt-2 border-t border-slate-100">
                  <a href="https://www.gaducompany.com" target="_blank" class="px-3 py-1.5 rounded-lg text-xs font-bold text-[#7E22CE] hover:bg-purple-50 flex items-center justify-between transition-colors">
                    <span>Ver todos los cursos prácticos</span>
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </nav>

        <!-- ======================================================================= -->
        <!-- 3. ACCIONES LATERALES: GADU APP, INTRANET & COTIZAR                     -->
        <!-- ======================================================================= -->
        <div class="hidden md:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
          
          <!-- Botón / Pill: GADU App (Tienda Virtual) -->
          <a 
            href="https://www.gaduapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="border border-emerald-400/90 bg-emerald-50/50 hover:bg-emerald-100/70 transition-all rounded-full px-4 sm:px-4.5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-2.5 shadow-2xs group cursor-pointer"
            title="Ir a Tienda Virtual GADU App (www.gaduapp.com)"
          >
            <i data-lucide="shopping-cart" class="w-[18px] h-[18px] text-emerald-600 transition-transform group-hover:scale-110"></i>
            <span class="text-sm sm:text-[15px] font-bold text-slate-800">GADU App</span>
            <span class="bg-emerald-100 text-emerald-700 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200/80">Tienda Virtual</span>
          </a>

          <!-- Botón Secundario: Intranet con icono lock -->
          <a 
            href="https://www.gaducompany.com" 
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 text-sm sm:text-[15px] font-semibold transition-colors cursor-pointer"
            title="Acceso Colaboradores e Intranet"
          >
            <i data-lucide="lock" class="w-[17px] h-[17px] text-slate-500"></i>
            <span>Intranet</span>
          </a>

          <!-- Botón Primario de Acción: Cotizar con icono send y chevron-right -->
          <a 
            href="https://www.gaducompany.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-[#0078D4] hover:bg-[#0062AD] text-white font-bold text-sm sm:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 shadow-sm shadow-blue-500/25 hover:shadow-md hover:shadow-blue-500/35 transition-all cursor-pointer"
          >
            <i data-lucide="send" class="w-4 h-4"></i>
            <span>Cotizar</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </a>
        </div>

        <!-- ======================================================================= -->
        <!-- 4. CONTROLES MÓVILES (< 768px)                                          -->
        <!-- ======================================================================= -->
        <div class="flex items-center gap-2 md:hidden">
          <a 
            href="https://www.gaducompany.com" 
            target="_blank"
            class="px-4 py-2 rounded-full bg-[#0078D4] text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-sm"
          >
            <span>Cotizar</span>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </a>

          <button 
            type="button" 
            (click)="alternarMenuMovil()"
            class="p-2.5 rounded-full bg-slate-100 text-slate-700 hover:text-[#0078D4] focus:outline-none cursor-pointer"
            aria-label="Alternar Menú"
          >
            <i [attr.data-lucide]="menuMovilAbierto() ? 'x' : 'menu'" class="w-5 h-5"></i>
          </button>
        </div>

      </div>

      <!-- ======================================================================= -->
      <!-- 5. PANEL DESPLEGABLE MÓVIL                                              -->
      <!-- ======================================================================= -->
      @if (menuMovilAbierto()) {
        <div class="lg:hidden mt-2 max-w-[1380px] mx-auto bg-white/98 backdrop-blur-md rounded-3xl border border-slate-200/90 p-4 space-y-3 shadow-2xl">
          <div class="flex flex-col gap-1">
            <a 
              routerLink="/" 
              (click)="cerrarMenuMovil()"
              routerLinkActive="bg-sky-50 text-[#0078D4] font-bold" 
              [routerLinkActiveOptions]="{ exact: true }"
              class="px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 flex items-center gap-2.5 hover:bg-slate-50"
            >
              <i data-lucide="home" class="w-4 h-4 text-[#0078D4]"></i>
              <span>Inicio Corporativo</span>
            </a>

            <a 
              href="https://www.gaducompany.com" 
              target="_blank"
              class="px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 flex items-center gap-2.5 hover:bg-slate-50"
            >
              <i data-lucide="laptop" class="w-4 h-4 text-[#0078D4]"></i>
              <span>GADU Tech (Cloud & POS)</span>
            </a>

            <a 
              href="https://www.gaduapp.com" 
              target="_blank"
              class="px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 flex items-center gap-2.5 hover:bg-slate-50"
            >
              <i data-lucide="box" class="w-4 h-4 text-[#0078D4]"></i>
              <span>GADU Commerce (B2B & Gaming)</span>
            </a>

            <a 
              href="https://www.gaducompany.com" 
              target="_blank"
              class="px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 flex items-center gap-2.5 hover:bg-slate-50"
            >
              <i data-lucide="graduation-cap" class="w-4 h-4 text-[#0078D4]"></i>
              <span>GADU Coach (Capacitación & Cultura)</span>
            </a>

            <a 
              routerLink="/monitor" 
              (click)="cerrarMenuMovil()"
              routerLinkActive="bg-sky-50 text-[#0078D4] font-bold"
              class="px-3.5 py-2.5 rounded-2xl text-sm font-semibold text-slate-700 flex items-center gap-2.5 hover:bg-slate-50"
            >
              <i data-lucide="activity" class="w-4 h-4 text-[#0078D4]"></i>
              <span>Monitor de Salud y Nodos</span>
            </a>
          </div>

          <div class="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a 
              href="https://www.gaduapp.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full py-2.5 px-3.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
            >
              <i data-lucide="shopping-cart" class="w-4 h-4 text-emerald-600"></i>
              <span>Ir a Tienda GADU App (www.gaduapp.com)</span>
            </a>

            <a 
              href="https://www.gaducompany.com" 
              target="_blank"
              class="w-full py-2.5 px-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <i data-lucide="lock" class="w-4 h-4 text-slate-600"></i>
              <span>Consola Intranet Colaboradores</span>
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
