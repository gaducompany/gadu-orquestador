import { afterNextRender, ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EstadoOrquestadorService } from '../../aplicacion/estado-orquestador.service';
import { inicializarIconosLucide } from '../../comun/lucide';
import { BandaClientesOrquestadorComponent } from '../comun/banda-clientes-orquestador.component';

@Component({
  selector: 'app-inicio-orquestador',
  standalone: true,
  imports: [CommonModule, RouterLink, BandaClientesOrquestadorComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="space-y-16 sm:space-y-20 pb-20">
      
      <!-- ========================================================================= -->
      <!-- 1. HERO PRINCIPAL CORPORATIVO GADU COMPANY                                -->
      <!-- ========================================================================= -->
      <section class="relative w-full overflow-hidden bg-white border-b border-slate-200/80 min-h-[500px] lg:min-h-[560px] flex items-center">
        <!-- Imagen de Fondo Corporativa a Ancho Completo con Gradiente Oficial -->
        <div class="absolute inset-0 w-full h-full pointer-events-none">
          <img 
            src="assets/banners/gadu-company-hero-banner.webp" 
            alt="GADU Company Holding y Orquestador" 
            class="w-full h-full object-cover object-right lg:object-[80%_center]"
            loading="eager"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-40% md:via-white/90 md:via-50% to-white/20 lg:to-transparent"></div>
          <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <!-- Contenido Superpuesto a la Izquierda -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
          <div class="max-w-2xl space-y-6 text-left">
            
            <!-- Badge de Reconocimiento y Estado -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-blue-200 shadow-xs text-xs font-bold text-[#0078D4]">
              <span class="w-2 h-2 rounded-full bg-[#0078D4] animate-ping"></span>
              <span>Holding Corporativo & Orquestador Central</span>
            </div>

            <!-- Titular de Gran Impacto -->
            <h1 class="text-3xl sm:text-5xl lg:text-[44px] xl:text-[48px] font-black text-slate-900 tracking-tight leading-[1.15]">
              Orquestación inteligente para el 
              <span class="text-[#0078D4]">ecosistema tecnológico</span> de GADU Company
            </h1>

            <!-- Párrafo Descriptivo -->
            <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              Plataforma Shell federada que integra y supervisa nuestras aplicaciones independientes: la tienda virtual <strong>www.gaduapp.com</strong>, el portal institucional <strong>www.gaducompany.com</strong>, el sistema POS y los microservicios backend.
            </p>

            <!-- Botones Principales de Llamado a la Acción -->
            <div class="pt-2 flex flex-wrap items-center gap-3">
              <a 
                routerLink="/tienda"
                class="px-6 sm:px-7 py-3.5 rounded-xl bg-[#0078D4] hover:bg-[#0062AD] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
                <span>Abrir Tienda GADU Commerce</span>
              </a>

              <a 
                routerLink="/monitor"
                class="px-5 sm:px-6 py-3.5 rounded-xl bg-white/90 backdrop-blur-sm hover:bg-white text-slate-700 font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-xs hover:border-slate-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <i data-lucide="activity" class="w-4 h-4 text-[#0078D4]"></i>
                <span>Monitor de Salud y Nodos</span>
              </a>
            </div>

            <!-- Micro-especificaciones de confianza técnica -->
            <div class="pt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-600 font-medium border-t border-slate-200/80 max-w-lg">
              <div class="flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
                <span>Angular 20 Zoneless</span>
              </div>
              <div class="flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
                <span>Despliegues en Vercel Edge</span>
              </div>
              <div class="flex items-center gap-1.5">
                <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
                <span>SLA 99.98% Garantizado</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 2. MÉTRICAS DE OBSERVABILIDAD Y RENDIMIENTO                               -->
      <!-- ========================================================================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div class="panel-cristal panel-cristal-hover rounded-2xl p-6 text-center space-y-1">
            <div class="text-3xl sm:text-4xl font-black text-[#0078D4] tracking-tight">
              99.98%
            </div>
            <div class="text-xs sm:text-sm font-bold text-slate-900">
              Disponibilidad SLA
            </div>
            <p class="text-[11px] text-slate-500 leading-tight">
              Infraestructura distribuida en Vercel Edge Network
            </p>
          </div>

          <div class="panel-cristal panel-cristal-hover rounded-2xl p-6 text-center space-y-1">
            <div class="text-3xl sm:text-4xl font-black text-[#0078D4] tracking-tight">
              ~12 ms
            </div>
            <div class="text-xs sm:text-sm font-bold text-slate-900">
              Latencia Media
            </div>
            <p class="text-[11px] text-slate-500 leading-tight">
              Enrutamiento reactivo de alto rendimiento
            </p>
          </div>

          <div class="panel-cristal panel-cristal-hover rounded-2xl p-6 text-center space-y-1">
            <div class="text-3xl sm:text-4xl font-black text-[#0078D4] tracking-tight">
              4 Módulos
            </div>
            <div class="text-xs sm:text-sm font-bold text-slate-900">
              Microfrontends Federados
            </div>
            <p class="text-[11px] text-slate-500 leading-tight">
              Desacoplados con ciclo de vida y CI/CD autónomo
            </p>
          </div>

          <div class="panel-cristal panel-cristal-hover rounded-2xl p-6 text-center space-y-1">
            <div class="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">
              0 ms
            </div>
            <div class="text-xs sm:text-sm font-bold text-slate-900">
              Sobrecarga Zone.js
            </div>
            <p class="text-[11px] text-slate-500 leading-tight">
              Reactividad de grano fino con Signals en Angular 20
            </p>
          </div>
        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 3. MARQUESINA DE CLIENTES Y CONFIANZA CORPORATIVA                         -->
      <!-- ========================================================================= -->
      <app-banda-clientes-orquestador />

      <!-- ========================================================================= -->
      <!-- 4. CATÁLOGO DE APLICACIONES Y MICROFRONTENDS REGISTRADOS                   -->
      <!-- ========================================================================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-[#0078D4] border border-blue-200">
            Módulos del Ecosistema
          </span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Microfrontends y Aplicaciones Registradas
          </h2>
          <p class="text-xs sm:text-sm text-slate-600">
            Sistemas independientes integrados en el Orquestador con despliegues desacoplados y dominios de alta disponibilidad.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          
          <!-- 1. GADU App Commerce -->
          <div class="panel-cristal panel-cristal-hover rounded-3xl p-6 flex flex-col justify-between group border-t-4 border-t-[#0078D4]">
            <div class="space-y-4">
              <div class="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/80 shadow-xs">
                <img 
                  src="assets/banners/gadu-commerce-card.webp" 
                  alt="GADU App Commerce" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span class="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-emerald-700 border border-emerald-200 shadow-xs">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  En línea
                </span>
              </div>

              <div>
                <h3 class="text-base font-bold text-slate-900">GADU App Commerce v2</h3>
                <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                  Tienda virtual de tecnología, hardware corporativo, checkout integrado y pagos Bold.
                </p>
              </div>

              <div class="space-y-1.5 pt-3 border-t border-slate-100 text-[11px]">
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Producción:</span>
                  <a href="https://www.gaduapp.com" target="_blank" class="font-mono font-bold text-[#0078D4] hover:underline">www.gaduapp.com</a>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Vercel:</span>
                  <span class="font-mono text-slate-600">gadu-app-commerce</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Dev Local:</span>
                  <span class="font-mono text-slate-700 font-semibold">:4202</span>
                </div>
              </div>
            </div>

            <div class="pt-5 flex items-center gap-2 border-t border-slate-100 mt-4">
              <a 
                routerLink="/tienda"
                class="flex-1 py-2.5 bg-[#0078D4] hover:bg-[#0062AD] text-white rounded-xl text-xs font-bold text-center transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <i data-lucide="layout-grid" class="w-3.5 h-3.5"></i>
                <span>Ver en Shell</span>
              </a>
              <a 
                href="https://www.gaduapp.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Abrir en www.gaduapp.com"
                class="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer"
              >
                <i data-lucide="external-link" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <!-- 2. GADU Company Portal -->
          <div class="panel-cristal panel-cristal-hover rounded-3xl p-6 flex flex-col justify-between group border-t-4 border-t-[#0369A1]">
            <div class="space-y-4">
              <div class="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/80 shadow-xs">
                <img 
                  src="assets/banners/gadu-tech-card.webp" 
                  alt="GADU Company Portal" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span class="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-emerald-700 border border-emerald-200 shadow-xs">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  En línea
                </span>
              </div>

              <div>
                <h3 class="text-base font-bold text-slate-900">GADU Company Portal</h3>
                <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                  Portal corporativo institucional, consultoría multi-cloud y portafolio de servicios B2B.
                </p>
              </div>

              <div class="space-y-1.5 pt-3 border-t border-slate-100 text-[11px]">
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Producción:</span>
                  <a href="https://www.gaducompany.com" target="_blank" class="font-mono font-bold text-[#0369A1] hover:underline">www.gaducompany.com</a>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Vercel:</span>
                  <span class="font-mono text-slate-600">gadu-company</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Dev Local:</span>
                  <span class="font-mono text-slate-700 font-semibold">:4201</span>
                </div>
              </div>
            </div>

            <div class="pt-5 flex items-center gap-2 border-t border-slate-100 mt-4">
              <a 
                href="https://www.gaducompany.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold text-center transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <i data-lucide="globe" class="w-3.5 h-3.5"></i>
                <span>Visitar Web</span>
              </a>
              <a 
                href="https://www.gaducompany.com" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Abrir en pestaña nueva"
                class="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer"
              >
                <i data-lucide="external-link" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <!-- 3. GADU POS System -->
          <div class="panel-cristal panel-cristal-hover rounded-3xl p-6 flex flex-col justify-between group border-t-4 border-t-[#059669]">
            <div class="space-y-4">
              <div class="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/80 shadow-xs">
                <img 
                  src="assets/banners/BannerPrincipalTech.webp" 
                  alt="GADU POS System" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span class="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-emerald-700 border border-emerald-200 shadow-xs">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  En línea
                </span>
              </div>

              <div>
                <h3 class="text-base font-bold text-slate-900">GADU POS System</h3>
                <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                  Sistema SaaS en la nube de punto de venta, facturación electrónica y control de inventario en mostrador.
                </p>
              </div>

              <div class="space-y-1.5 pt-3 border-t border-slate-100 text-[11px]">
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Producción:</span>
                  <a href="https://gadu-pos-system.vercel.app" target="_blank" class="font-mono font-bold text-emerald-700 hover:underline">gadu-pos-system</a>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Vercel:</span>
                  <span class="font-mono text-slate-600">pos-system.app</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Dev Local:</span>
                  <span class="font-mono text-slate-700 font-semibold">:4203</span>
                </div>
              </div>
            </div>

            <div class="pt-5 flex items-center gap-2 border-t border-slate-100 mt-4">
              <a 
                href="https://gadu-pos-system.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold text-center transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <i data-lucide="receipt" class="w-3.5 h-3.5"></i>
                <span>Abrir POS</span>
              </a>
              <a 
                href="https://gadu-pos-system.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Abrir en pestaña nueva"
                class="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer"
              >
                <i data-lucide="external-link" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <!-- 4. GADU API Gateway -->
          <div class="panel-cristal panel-cristal-hover rounded-3xl p-6 flex flex-col justify-between group border-t-4 border-t-[#7E22CE]">
            <div class="space-y-4">
              <div class="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900/5 border border-slate-200/80 shadow-xs">
                <img 
                  src="assets/banners/gadu-coach-card.webp" 
                  alt="API Gateway" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span class="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 text-emerald-700 border border-emerald-200 shadow-xs">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  En línea
                </span>
              </div>

              <div>
                <h3 class="text-base font-bold text-slate-900">API Gateway & Servicios</h3>
                <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                  C# .NET Minimal APIs & Node.js, catálogo unificado, pasarela Bold, PostgreSQL y Redis SSE.
                </p>
              </div>

              <div class="space-y-1.5 pt-3 border-t border-slate-100 text-[11px]">
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Producción:</span>
                  <span class="font-mono font-bold text-purple-700">api.gaducompany.com</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Protocolos:</span>
                  <span class="font-mono text-slate-600">REST, SSE, Redis</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-slate-400">Dev Local:</span>
                  <span class="font-mono text-slate-700 font-semibold">:4000</span>
                </div>
              </div>
            </div>

            <div class="pt-5 flex items-center gap-2 border-t border-slate-100 mt-4">
              <a 
                routerLink="/monitor"
                class="flex-1 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold text-center transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <i data-lucide="activity" class="w-3.5 h-3.5"></i>
                <span>Ver Telemetría</span>
              </a>
              <a 
                routerLink="/monitor" 
                title="Ver estado de API"
                class="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer"
              >
                <i data-lucide="server" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- ========================================================================= -->
      <!-- 5. RESUMEN DE ARQUITECTURA ENTERPRISE (AZURE LIGHT THEME)                  -->
      <!-- ========================================================================= -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="panel-cristal rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div class="space-y-1">
              <span class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-[#0078D4] border border-blue-200">
                Estándares Técnicos
              </span>
              <h3 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Arquitectura Enterprise Implementada
              </h3>
            </div>
            <span class="text-xs font-mono font-bold text-[#0078D4] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 self-start sm:self-auto">
              GADU Architectural Blueprint 2026
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div class="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2.5 shadow-2xs hover:shadow-sm transition-shadow">
              <div class="flex items-center gap-2">
                <div class="p-2 rounded-xl bg-blue-50 text-[#0078D4]">
                  <i data-lucide="box" class="w-4 h-4"></i>
                </div>
                <h4 class="font-bold text-slate-900 text-sm">Clean & Hexagonal</h4>
              </div>
              <p class="text-slate-600 text-[11px] leading-relaxed">
                Separación estricta de capas (Dominio, Aplicación, Infraestructura, UI) en idioma español, desacoplada de dependencias externas.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2.5 shadow-2xs hover:shadow-sm transition-shadow">
              <div class="flex items-center gap-2">
                <div class="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                  <i data-lucide="zap" class="w-4 h-4"></i>
                </div>
                <h4 class="font-bold text-slate-900 text-sm">Zoneless & Signals</h4>
              </div>
              <p class="text-slate-600 text-[11px] leading-relaxed">
                Reactividad de grano fino sin Zone.js mediante <code>provideZonelessChangeDetection()</code>, reduciendo la sobrecarga a cero.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2.5 shadow-2xs hover:shadow-sm transition-shadow">
              <div class="flex items-center gap-2">
                <div class="p-2 rounded-xl bg-amber-50 text-amber-600">
                  <i data-lucide="cpu" class="w-4 h-4"></i>
                </div>
                <h4 class="font-bold text-slate-900 text-sm">.NET Minimal APIs</h4>
              </div>
              <p class="text-slate-600 text-[11px] leading-relaxed">
                Modelos de dominio y adaptadores listos para operar tanto con Node.js como con la migración a C# .NET Minimal APIs de alto rendimiento.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-white border border-slate-200/90 space-y-2.5 shadow-2xs hover:shadow-sm transition-shadow">
              <div class="flex items-center gap-2">
                <div class="p-2 rounded-xl bg-purple-50 text-purple-600">
                  <i data-lucide="network" class="w-4 h-4"></i>
                </div>
                <h4 class="font-bold text-slate-900 text-sm">Module Federation</h4>
              </div>
              <p class="text-slate-600 text-[11px] leading-relaxed">
                Orquestación desacoplada que permite coordinar y montar microfrontends en tiempo de ejecución conservando sus propios dominios.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
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
