import { Injectable, computed, signal } from '@angular/core';
import { Microfrontend } from '../dominio/modelos/microfrontend.modelo';

@Injectable({
  providedIn: 'root'
})
export class EstadoOrquestadorService {
  // Lista de microfrontends registrados en el ecosistema GADU
  public readonly microfrontends = signal<Microfrontend[]>([
    {
      id: 'gadu-app-commerce',
      nombre: 'GADU App Commerce',
      descripcion: 'Tienda virtual tecnológica y hardware corporativo para Colombia',
      dominioProduccion: 'https://www.gaduapp.com',
      urlDesarrollo: 'http://localhost:4202',
      rutaEnOrquestador: '/tienda',
      icono: 'tienda',
      estado: 'en_linea',
      esPrincipal: true,
      version: '2.0.0-angular20'
    },
    {
      id: 'gadu-company-portal',
      nombre: 'GADU Company Portal',
      descripcion: 'Portal institucional y servicios empresariales de GADU Company',
      dominioProduccion: 'https://www.gaducompany.com',
      urlDesarrollo: 'http://localhost:4201',
      rutaEnOrquestador: '/portal',
      icono: 'portal',
      estado: 'en_linea',
      esPrincipal: false,
      version: '1.5.0'
    },
    {
      id: 'gadu-backend-api',
      nombre: 'GADU API Gateway & Microservicios',
      descripcion: 'API de Productos, Envíos, Pasarela Bold y Auth (Node.js / C# .NET Minimal APIs)',
      dominioProduccion: 'https://api.gaducompany.com',
      urlDesarrollo: 'http://localhost:4000',
      rutaEnOrquestador: '/api',
      icono: 'api',
      estado: 'en_linea',
      esPrincipal: false,
      version: '2.1.0'
    }
  ]);

  public readonly idMicrofrontendActivo = signal<string>('gadu-app-commerce');

  // Selector computado del microfrontend actual
  public readonly microfrontendActivo = computed(() => {
    const id = this.idMicrofrontendActivo();
    return this.microfrontends().find(m => m.id === id) || this.microfrontends()[0];
  });

  public seleccionarMicrofrontend(id: string): void {
    this.idMicrofrontendActivo.set(id);
  }

  public actualizarEstado(id: string, nuevoEstado: 'en_linea' | 'sin_conexion' | 'comprobando'): void {
    this.microfrontends.update(lista =>
      lista.map(m => (m.id === id ? { ...m, estado: nuevoEstado } : m))
    );
  }
}
