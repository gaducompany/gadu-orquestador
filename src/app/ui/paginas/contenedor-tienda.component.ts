import { afterNextRender, ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { inicializarIconosLucide } from '../../comun/lucide';

@Component({
  selector: 'app-contenedor-tienda',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col h-[calc(100vh-4rem)] bg-slate-100">
      
      <!-- Barra de Control del Microfrontend en el Orquestador -->
      <div class="bg-white border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs shadow-sm">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <i data-lucide="shopping-bag" class="w-3.5 h-3.5 text-blue-700"></i>
            <span>Microfrontend: GADU App Commerce v2</span>
          </span>
          <span class="text-slate-400">|</span>
          <span class="font-mono text-slate-500 hidden sm:inline">Dominio: <strong>www.gaduapp.com</strong> (Local: :4202)</span>
        </div>

        <div class="flex items-center gap-2">
          <!-- Botón Recargar Frame -->
          <button 
            type="button" 
            (click)="recargarMicrofrontend()"
            class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 font-medium transition-colors flex items-center gap-1.5">
            <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
            <span>Recargar</span>
          </button>

          <!-- Enlace Directo a Dominio Autónomo -->
          <a 
            [href]="urlTienda()" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors flex items-center gap-1.5 shadow-sm">
            <span>Abrir en www.gaduapp.com</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>

      <!-- Marco Contenedor del Microfrontend -->
      <div class="flex-1 w-full bg-slate-50 relative">
        <iframe 
          #frameTienda
          [src]="urlTienda()" 
          title="Tienda Virtual GADU App Commerce"
          class="w-full h-full border-0">
        </iframe>
      </div>

    </div>
  `
})
export class ContenedorTiendaComponent {
  public readonly urlTienda = signal<string>('http://localhost:4202');

  constructor() {
    afterNextRender(() => {
      inicializarIconosLucide();
    });
  }

  public recargarMicrofrontend(): void {
    const actual = this.urlTienda();
    this.urlTienda.set('');
    setTimeout(() => {
      this.urlTienda.set(actual);
      setTimeout(() => inicializarIconosLucide(), 100);
    }, 50);
  }
}
