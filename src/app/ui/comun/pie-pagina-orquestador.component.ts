import { afterNextRender, ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { inicializarIconosLucide } from '../../comun/lucide';

@Component({
  selector: 'app-pie-pagina-orquestador',
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          <!-- Columna 1 y 2: Identidad Institucional y Propósito -->
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <img 
                src="assets/logos/GADUCompany.png" 
                alt="GADU COMPANY" 
                class="h-9 w-auto object-contain brightness-0 invert"
                onerror="this.src='favicon.ico'"
              />
            </div>
            
            <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
              Plataforma Shell y Orquestador de Microfrontends de GADU Company. Centraliza la experiencia de navegación, seguridad y telemetría de aplicaciones distribuidas en la nube.
            </p>

            <div class="flex items-center gap-2 pt-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-[11px] font-bold">
                <i data-lucide="shield-check" class="w-3.5 h-3.5"></i>
                <span>Alta Disponibilidad Vercel Edge</span>
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-semibold">
                <i data-lucide="award" class="w-3.5 h-3.5 text-slate-400"></i>
                <span>Angular 20 Zoneless</span>
              </span>
            </div>
          </div>

          <!-- Columna 3: GADU Tech & Nube -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-[#0078D4]"></span>
              <span>Tech & Cloud</span>
            </h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><a href="https://gadu-pos-system.vercel.app" target="_blank" class="hover:text-white transition-colors">GADU POS System</a></li>
              <li><a href="https://www.gaducompany.com" target="_blank" class="hover:text-white transition-colors">Consultoría Multi-Cloud</a></li>
              <li><a href="https://www.gaducompany.com" target="_blank" class="hover:text-white transition-colors">Ciberseguridad & EDR</a></li>
              <li><a routerLink="/monitor" class="hover:text-white transition-colors">Monitor de Salud Ecosistema</a></li>
            </ul>
          </div>

          <!-- Columna 4: GADU Commerce & Tienda -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-[#0369A1]"></span>
              <span>E-Commerce B2B</span>
            </h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li><a routerLink="/tienda" class="hover:text-white transition-colors">Tienda en Orquestador</a></li>
              <li><a href="https://www.gaduapp.com" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-400 transition-colors flex items-center gap-1">
                <span>www.gaduapp.com</span>
                <i data-lucide="external-link" class="w-3 h-3"></i>
              </a></li>
              <li><a href="https://www.gaducompany.com" target="_blank" class="hover:text-white transition-colors">Hardware Corporativo</a></li>
              <li><a href="https://www.gaducompany.com" target="_blank" class="hover:text-white transition-colors">Licenciamiento Digital</a></li>
            </ul>
          </div>

          <!-- Columna 5: Sedes & Enlace Oficial -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Holding GADU</span>
            </h4>
            <ul class="space-y-2 text-xs text-slate-400">
              <li class="flex items-center gap-2">
                <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-400 shrink-0"></i>
                <span>Cali, Valle del Cauca, Colombia</span>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="globe" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i>
                <a href="https://www.gaducompany.com" target="_blank" class="hover:text-white font-mono">www.gaducompany.com</a>
              </li>
              <li class="flex items-center gap-2">
                <i data-lucide="layers" class="w-3.5 h-3.5 text-purple-400 shrink-0"></i>
                <a href="https://gadu-orquestador.vercel.app" target="_blank" class="hover:text-white font-mono">gadu-orquestador.vercel.app</a>
              </li>
            </ul>
          </div>

        </div>

        <!-- Barra Inferior de Derechos y Copyright -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 GADU Company S.A. Todos los derechos reservados. NIT: 901.815.426-8</p>
          <div class="flex items-center gap-6">
            <span class="hover:text-slate-400 transition-colors">Arquitectura Limpia & Modular</span>
            <span class="text-slate-700">•</span>
            <span class="hover:text-slate-400 transition-colors">Vercel Edge Network</span>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class PiePaginaOrquestadorComponent {
  constructor() {
    afterNextRender(() => {
      inicializarIconosLucide();
    });
  }
}
