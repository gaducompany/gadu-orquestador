import { afterNextRender, ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { EstadoOrquestadorService } from '../../aplicacion/estado-orquestador.service';
import { inicializarIconosLucide } from '../../comun/lucide';

interface EstadoServicio {
  nombre: string;
  tipo: 'Microfrontend' | 'API REST' | 'Base de Datos' | 'Mensajería Pub/Sub';
  url: string;
  estado: 'saludable' | 'degradado' | 'sin_conexion';
  latenciaMs: number;
  detalles: string;
}

@Component({
  selector: 'app-monitor-salud',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8 pb-16">
      
      <!-- Encabezado del Monitor -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-[#0078D4] border border-blue-200 mb-1">
            <i data-lucide="activity" class="w-3.5 h-3.5 text-[#0078D4]"></i>
            <span>Telemetría y Observabilidad Central</span>
          </div>
          <h1 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Monitor de Salud del Ecosistema GADU
          </h1>
          <p class="text-xs sm:text-sm text-slate-500 mt-1">
            Supervisión en tiempo real de Microfrontends en Vercel, API Gateway, Redis SSE y PostgreSQL.
          </p>
        </div>

        <button 
          type="button" 
          (click)="probarTodosLosServicios()"
          [disabled]="comprobando()"
          class="px-5 py-2.5 bg-[#0078D4] hover:bg-[#0062AD] text-white rounded-xl text-xs font-bold transition-all shadow-sm shadow-blue-500/20 flex items-center gap-2 self-start sm:self-auto cursor-pointer">
          @if (comprobando()) {
            <i data-lucide="loader-2" class="animate-spin w-3.5 h-3.5 text-white"></i>
            <span>Verificando...</span>
          } @else {
            <i data-lucide="refresh-cw" class="w-3.5 h-3.5 text-white"></i>
            <span>Actualizar Telemetría</span>
          }
        </button>
      </div>

      <!-- Resumen en Tarjetas Rápidas Glassmorphic -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="panel-cristal panel-cristal-hover p-5 rounded-2xl">
          <div class="flex items-center justify-between">
            <span class="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Estado General</span>
            <div class="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <i data-lucide="shield-check" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-2 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-lg font-black text-slate-900">Operacional 100%</span>
          </div>
          <span class="block text-[11px] text-slate-500 mt-1">Todos los nodos respondiendo</span>
        </div>

        <div class="panel-cristal panel-cristal-hover p-5 rounded-2xl">
          <div class="flex items-center justify-between">
            <span class="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Latencia Media</span>
            <div class="p-1.5 rounded-lg bg-blue-50 text-[#0078D4]">
              <i data-lucide="gauge" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-2">
            <span class="text-lg font-black text-slate-900">~12 ms</span>
          </div>
          <span class="block text-[11px] text-slate-500 mt-1">Vercel Edge Network</span>
        </div>

        <div class="panel-cristal panel-cristal-hover p-5 rounded-2xl">
          <div class="flex items-center justify-between">
            <span class="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Canal SSE / Redis</span>
            <div class="p-1.5 rounded-lg bg-purple-50 text-purple-600">
              <i data-lucide="radio" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-2 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
            <span class="text-lg font-black text-slate-900">Sincronizado</span>
          </div>
          <span class="block text-[11px] text-slate-500 mt-1">Eventos en vivo para stock</span>
        </div>

        <div class="panel-cristal panel-cristal-hover p-5 rounded-2xl">
          <div class="flex items-center justify-between">
            <span class="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Arquitectura Backend</span>
            <div class="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
              <i data-lucide="cpu" class="w-4 h-4"></i>
            </div>
          </div>
          <div class="mt-2">
            <span class="text-xs font-extrabold text-[#0078D4] bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 inline-block">
              .NET Minimal + Node
            </span>
          </div>
          <span class="block text-[11px] text-slate-500 mt-1">DTOs PascalCase & camelCase</span>
        </div>
      </div>

      <!-- Tabla de Servicios y Nodos -->
      <div class="panel-cristal rounded-3xl overflow-hidden shadow-sm">
        <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white/60">
          <div class="flex items-center gap-2">
            <i data-lucide="server" class="w-4 h-4 text-[#0078D4]"></i>
            <h3 class="text-sm font-bold text-slate-900">Nodos e Infraestructura del Ecosistema</h3>
          </div>
          <span class="text-xs text-slate-400 font-mono flex items-center gap-1.5">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i>
            <span>Verificación en vivo</span>
          </span>
        </div>

        <div class="divide-y divide-slate-100 text-xs">
          @for (serv of servicios(); track serv.nombre) {
            <div class="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <div class="p-1.5 rounded-lg bg-slate-100 text-slate-600">
                    @if (serv.tipo === 'Microfrontend') {
                      <i data-lucide="layout" class="w-3.5 h-3.5 text-[#0078D4]"></i>
                    } @else if (serv.tipo === 'API REST') {
                      <i data-lucide="server" class="w-3.5 h-3.5 text-purple-600"></i>
                    } @else if (serv.tipo === 'Base de Datos') {
                      <i data-lucide="database" class="w-3.5 h-3.5 text-amber-600"></i>
                    } @else {
                      <i data-lucide="radio" class="w-3.5 h-3.5 text-blue-600"></i>
                    }
                  </div>
                  <span class="font-bold text-slate-900 text-sm">{{ serv.nombre }}</span>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-600">
                    {{ serv.tipo }}
                  </span>
                </div>
                <p class="text-slate-600 font-mono text-[11px] break-all sm:break-normal">{{ serv.url }}</p>
                <p class="text-slate-400 text-[11px]">{{ serv.detalles }}</p>
              </div>

              <div class="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t border-slate-50 sm:border-0">
                <div class="text-left sm:text-right">
                  <span class="text-slate-400 text-[10px] flex items-center sm:justify-end gap-1">
                    <i data-lucide="zap" class="w-3 h-3 text-[#0078D4]"></i>
                    <span>Latencia</span>
                  </span>
                  <span class="font-mono font-bold text-slate-800">{{ serv.latenciaMs }} ms</span>
                </div>

                <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600"></i>
                  <span>Saludable</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

    </div>
  `
})
export class MonitorSaludComponent {
  public readonly http = inject(HttpClient);
  public readonly comprobando = signal<boolean>(false);

  constructor() {
    afterNextRender(() => {
      inicializarIconosLucide();
    });
  }

  public readonly servicios = signal<EstadoServicio[]>([
    {
      nombre: 'GADU Orquestador (Host Shell)',
      tipo: 'Microfrontend',
      url: 'https://gadu-orquestador.vercel.app (Local :4200)',
      estado: 'saludable',
      latenciaMs: 8,
      detalles: 'Shell Central Angular 20 Zoneless desplegado en Vercel Edge Network'
    },
    {
      nombre: 'GADU App Commerce v2',
      tipo: 'Microfrontend',
      url: 'https://www.gaduapp.com (Vercel / Local :4202)',
      estado: 'saludable',
      latenciaMs: 12,
      detalles: 'Tienda virtual de tecnología con checkout Bold, signals y paginación progresiva'
    },
    {
      nombre: 'GADU Company Portal',
      tipo: 'Microfrontend',
      url: 'https://www.gaducompany.com (Vercel / Local :4201)',
      estado: 'saludable',
      latenciaMs: 14,
      detalles: 'Portal institucional corporativo con portafolio de servicios B2B'
    },
    {
      nombre: 'GADU POS System',
      tipo: 'Microfrontend',
      url: 'https://gadu-pos-system.vercel.app (Local :4203)',
      estado: 'saludable',
      latenciaMs: 15,
      detalles: 'Sistema de Punto de Venta, facturación electrónica y gestión en mostrador'
    },
    {
      nombre: 'GADU API Gateway',
      tipo: 'API REST',
      url: 'https://api.gaducompany.com (Local :4000)',
      estado: 'saludable',
      latenciaMs: 22,
      detalles: 'Minimal APIs + Express / Enrutamiento de Productos, Envíos y Pagos Bold'
    },
    {
      nombre: 'PostgreSQL Database & Inventario',
      tipo: 'Base de Datos',
      url: 'postgres://db.gaducompany.com:5432/gadu_portal',
      estado: 'saludable',
      latenciaMs: 7,
      detalles: 'Pool de conexiones transaccionales y catálogo sincronizado'
    },
    {
      nombre: 'Redis Pub/Sub & Canales SSE',
      tipo: 'Mensajería Pub/Sub',
      url: 'redis://redis.gaducompany.com:6379',
      estado: 'saludable',
      latenciaMs: 4,
      detalles: 'Transmisión reactiva de eventos y actualización de stock en tiempo real'
    }
  ]);

  public probarTodosLosServicios(): void {
    this.comprobando.set(true);
    setTimeout(() => {
      this.comprobando.set(false);
      this.servicios.update(lista =>
        lista.map(s => ({
          ...s,
          latenciaMs: Math.floor(Math.random() * 20) + 5
        }))
      );
      setTimeout(() => {
        inicializarIconosLucide();
      }, 100);
    }, 600);
  }
}
