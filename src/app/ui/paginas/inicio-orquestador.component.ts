import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EstadoOrquestadorService } from '../../aplicacion/estado-orquestador.service';
import { inicializarIconosLucide } from '../../comun/lucide';

@Component({
  selector: 'app-inicio-orquestador',
  standalone: true,
  imports: [CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="space-y-10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <!-- Encabezado Hero del Orquestador -->
      <div class="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4 relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-blue-300"></i>
            <span>Orquestador Central de Microfrontends</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ecosistema Tecnológico GADU Company
          </h1>

          <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
            Plataforma modular con arquitectura federada que coordina aplicaciones independientes: la tienda virtual <strong>www.gaduapp.com</strong>, el portal institucional <strong>www.gaducompany.com</strong>, el sistema de punto de venta y los microservicios backend.
          </p>

          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Dominio Cloud Oficial:</span>
            <a href="https://gadu-orquestador.vercel.app" target="_blank" class="font-mono font-bold text-blue-400 hover:underline">
              gadu-orquestador.vercel.app
            </a>
          </div>

          <div class="pt-2 flex flex-wrap items-center gap-4">
            <a 
              routerLink="/tienda" 
              class="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-xs font-bold shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 cursor-pointer">
              <i data-lucide="shopping-bag" class="w-4 h-4"></i>
              <span>Abrir Tienda GADU Commerce</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>

            <a 
              routerLink="/monitor" 
              class="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-2xl text-xs font-bold border border-slate-700 transition-all flex items-center gap-2 cursor-pointer">
              <i data-lucide="activity" class="w-4 h-4"></i>
              <span>Ver Monitor de Salud y Métricas</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Tarjetas de Microfrontends Federados -->
      <div>
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-2.5">
            <div class="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
              <i data-lucide="boxes" class="w-5 h-5"></i>
            </div>
            <div>
              <h2 class="text-xl font-bold text-slate-900">Aplicaciones y Microfrontends Registrados</h2>
              <p class="text-xs text-slate-500">Módulos federados autónomos con despliegue e infraestructura desacoplada</p>
            </div>
          </div>
          <span class="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            {{ servicioOrquestador.microfrontends().length }} Módulos Activos
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (mfe of servicioOrquestador.microfrontends(); track mfe.id) {
            <div class="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div>
                <!-- Encabezado de la Tarjeta -->
                <div class="flex items-start justify-between mb-4">
                  <div class="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                    @if (mfe.id === 'gadu-app-commerce') {
                      <i data-lucide="shopping-bag" class="w-6 h-6 text-blue-600"></i>
                    } @else if (mfe.id === 'gadu-company-portal') {
                      <i data-lucide="building-2" class="w-6 h-6 text-indigo-600"></i>
                    } @else if (mfe.id === 'gadu-pos-system') {
                      <i data-lucide="receipt" class="w-6 h-6 text-emerald-600"></i>
                    } @else {
                      <i data-lucide="server" class="w-6 h-6 text-purple-600"></i>
                    }
                  </div>
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    En línea
                  </span>
                </div>

                <h3 class="text-base font-bold text-slate-900 mb-1">{{ mfe.nombre }}</h3>
                <p class="text-xs text-slate-500 leading-relaxed mb-4">{{ mfe.descripcion }}</p>

                <!-- Especificaciones Técnicas -->
                <div class="space-y-1.5 py-3 border-t border-slate-100 text-[11px]">
                  <div class="flex justify-between items-center gap-2">
                    <span class="text-slate-400">Producción:</span>
                    <a [href]="mfe.dominioProduccion" target="_blank" class="font-mono font-semibold text-blue-700 hover:underline truncate">
                      {{ mfe.dominioProduccion.replace('https://', '') }}
                    </a>
                  </div>
                  @if (mfe.dominioVercel) {
                    <div class="flex justify-between items-center gap-2">
                      <span class="text-slate-400">Vercel:</span>
                      <a [href]="mfe.dominioVercel" target="_blank" class="font-mono text-slate-600 hover:underline truncate">
                        {{ mfe.dominioVercel.replace('https://', '') }}
                      </a>
                    </div>
                  }
                  <div class="flex justify-between items-center">
                    <span class="text-slate-400">Dev Local:</span>
                    <span class="font-mono font-semibold text-slate-700">{{ mfe.urlDesarrollo.replace('http://localhost', ':') }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-slate-400">Versión:</span>
                    <span class="font-mono font-semibold text-blue-600">{{ mfe.version }}</span>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-slate-100 flex items-center gap-2">
                @if (mfe.id === 'gadu-app-commerce') {
                  <a 
                    routerLink="/tienda" 
                    class="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold text-center transition-colors shadow-sm flex items-center justify-center gap-1.5">
                    <i data-lucide="layout-grid" class="w-3.5 h-3.5"></i>
                    <span>Ver en Orquestador</span>
                  </a>
                } @else {
                  <a 
                    [href]="mfe.dominioProduccion" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5">
                    <i data-lucide="globe" class="w-3.5 h-3.5"></i>
                    <span>Visitar Web</span>
                  </a>
                }

                <a 
                  [href]="mfe.dominioProduccion" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Abrir en pestaña nueva"
                  class="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500 hover:text-slate-700 transition-colors flex items-center justify-center">
                  <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Resumen de Arquitectura Implementada -->
      <div class="bg-slate-900 rounded-3xl p-8 text-white">
        <h3 class="text-lg font-bold mb-4 text-white flex items-center gap-2">
          <i data-lucide="layers" class="w-5 h-5 text-blue-400"></i>
          <span>Arquitectura Enterprise Implementada</span>
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
            <div class="flex items-center gap-2">
              <i data-lucide="box" class="w-4 h-4 text-blue-400"></i>
              <h4 class="font-bold text-blue-400">Clean & Hexagonal</h4>
            </div>
            <p class="text-slate-300 text-[11px] leading-relaxed">
              Capas desacopladas (Dominio, Aplicación, Infraestructura, UI) independientes de frameworks o librerías HTTP.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
            <div class="flex items-center gap-2">
              <i data-lucide="zap" class="w-4 h-4 text-emerald-400"></i>
              <h4 class="font-bold text-emerald-400">Zoneless & Signals</h4>
            </div>
            <p class="text-slate-300 text-[11px] leading-relaxed">
              Reactividad de grano fino sin Zone.js, reduciendo sobrecarga de ciclo de detección de cambios a cero.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
            <div class="flex items-center gap-2">
              <i data-lucide="cpu" class="w-4 h-4 text-amber-400"></i>
              <h4 class="font-bold text-amber-400">C# .NET Minimal APIs</h4>
            </div>
            <p class="text-slate-300 text-[11px] leading-relaxed">
              DTOs y Adaptadores preparados tanto para el backend Node.js actual como para futura migración a .NET Minimal APIs.
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2">
            <div class="flex items-center gap-2">
              <i data-lucide="network" class="w-4 h-4 text-purple-400"></i>
              <h4 class="font-bold text-purple-400">Module Federation</h4>
            </div>
            <p class="text-slate-300 text-[11px] leading-relaxed">
              Orquestación modular que permite enrutar y consumir microfrontends de forma autónoma con sus propios dominios.
            </p>
          </div>
        </div>
      </div>

    </div>
  `
})
export class InicioOrquestadorComponent {
  public readonly servicioOrquestador = inject(EstadoOrquestadorService);

  constructor() {
    afterNextRender(() => {
      inicializarIconosLucide();
    });
  }
}
