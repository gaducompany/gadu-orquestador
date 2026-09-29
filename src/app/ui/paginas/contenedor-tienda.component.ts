import { afterNextRender, ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EstadoOrquestadorService } from '../../aplicacion/estado-orquestador.service';
import { inicializarIconosLucide } from '../../comun/lucide';

@Component({
  selector: 'app-contenedor-tienda',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-[1360px] mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col h-[calc(100vh-6rem)]">
      <div class="panel-cristal rounded-3xl overflow-hidden flex flex-col flex-1 shadow-lg shadow-slate-200/50 border border-slate-200/90">
        
        <!-- Barra de Control del Microfrontend en el Orquestador -->
        <div class="bg-white/95 border-b border-slate-200 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div class="flex flex-wrap items-center gap-2 sm:gap-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-[#0078D4] border border-blue-200">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <i data-lucide="shopping-bag" class="w-3.5 h-3.5 text-[#0078D4]"></i>
              <span>Microfrontend: GADU App Commerce v2</span>
            </span>

            <!-- Selector de Origen / Servidor -->
            <div class="inline-flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-[11px]">
              <button 
                type="button"
                (click)="cambiarOrigen('produccion')"
                [class]="origenActivo() === 'produccion' ? 'bg-white font-bold text-[#0078D4] shadow-xs' : 'text-slate-600 hover:text-slate-900'"
                class="px-2.5 py-1 rounded-md transition-all cursor-pointer">
                www.gaduapp.com
              </button>
              <button 
                type="button"
                (click)="cambiarOrigen('vercel')"
                [class]="origenActivo() === 'vercel' ? 'bg-white font-bold text-[#0078D4] shadow-xs' : 'text-slate-600 hover:text-slate-900'"
                class="px-2.5 py-1 rounded-md transition-all cursor-pointer">
                Vercel App
              </button>
              <button 
                type="button"
                (click)="cambiarOrigen('local')"
                [class]="origenActivo() === 'local' ? 'bg-white font-bold text-[#0078D4] shadow-xs' : 'text-slate-600 hover:text-slate-900'"
                class="px-2.5 py-1 rounded-md transition-all cursor-pointer">
                Local :4202
              </button>
            </div>

            <span class="font-mono text-slate-500 text-[11px] hidden xl:inline">
              Cargando: <strong>{{ urlTienda() }}</strong>
            </span>
          </div>

          <div class="flex items-center gap-2">
            <!-- Botón Recargar Frame -->
            <button 
              type="button" 
              (click)="recargarMicrofrontend()"
              class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 font-medium transition-colors flex items-center gap-1.5 cursor-pointer">
              <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
              <span>Recargar</span>
            </button>

            <!-- Enlace Directo a Dominio Autónomo -->
            <a 
              [href]="urlTienda()" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-3.5 py-1.5 rounded-lg bg-[#0078D4] hover:bg-[#0062AD] text-white font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
              <span>Abrir en pestaña nueva</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          </div>
        </div>

        <!-- Marco Contenedor del Microfrontend -->
        <div class="flex-1 w-full bg-slate-50 relative">
          @if (cargando()) {
            <div class="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center gap-3 z-10">
              <i data-lucide="loader-2" class="w-8 h-8 text-[#0078D4] animate-spin"></i>
              <p class="text-xs font-semibold text-slate-500">Cargando GADU App Commerce...</p>
            </div>
          }
          <iframe 
            #frameTienda
            [src]="urlSegura()" 
            (load)="alCargarIframe()"
            title="Tienda Virtual GADU App Commerce"
            class="w-full h-full border-0">
          </iframe>
        </div>

      </div>
    </div>
  `
})
export class ContenedorTiendaComponent {
  private readonly sanitizer = inject(DomSanitizer);
  public readonly servicioOrquestador = inject(EstadoOrquestadorService);

  // Origen seleccionado ('produccion' por defecto en nube, 'local' por defecto en desarrollo local)
  public readonly origenActivo = signal<'produccion' | 'vercel' | 'local'>(
    this.servicioOrquestador.esEntornoNube() ? 'produccion' : 'local'
  );

  public readonly cargando = signal<boolean>(true);

  // Microfrontend GADU Commerce
  public readonly mfeCommerce = computed(() => {
    return this.servicioOrquestador.microfrontends().find(m => m.id === 'gadu-app-commerce')!;
  });

  // URL resuelta según el origen activo
  public readonly urlTienda = computed<string>(() => {
    const origen = this.origenActivo();
    const mfe = this.mfeCommerce();
    if (origen === 'produccion') {
      return mfe.dominioProduccion;
    }
    if (origen === 'vercel') {
      return mfe.dominioVercel || 'https://gadu-app-commerce.vercel.app';
    }
    return mfe.urlDesarrollo;
  });

  // URL segura para el iframe
  public readonly urlSegura = computed<SafeResourceUrl>(() => {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.urlTienda());
  });

  constructor() {
    afterNextRender(() => {
      inicializarIconosLucide();
    });
  }

  public cambiarOrigen(origen: 'produccion' | 'vercel' | 'local'): void {
    this.cargando.set(true);
    this.origenActivo.set(origen);
    setTimeout(() => {
      inicializarIconosLucide();
    }, 100);
  }

  public alCargarIframe(): void {
    this.cargando.set(false);
    setTimeout(() => {
      inicializarIconosLucide();
    }, 100);
  }

  public recargarMicrofrontend(): void {
    this.cargando.set(true);
    const actual = this.origenActivo();
    // Forzar re-render de iframe
    this.origenActivo.set('produccion');
    setTimeout(() => {
      this.origenActivo.set(actual);
      setTimeout(() => inicializarIconosLucide(), 100);
    }, 50);
  }
}
