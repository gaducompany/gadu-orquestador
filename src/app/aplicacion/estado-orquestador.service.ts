import { Injectable, computed, signal } from '@angular/core';
import { Microfrontend } from '../dominio/modelos/microfrontend.modelo';

export type ModoOrigen = 'auto' | 'produccion' | 'vercel' | 'local';

@Injectable({
  providedIn: 'root'
})
export class EstadoOrquestadorService {
  // Dominio oficial del Orquestador
  public readonly dominioOrquestadorProduccion = 'https://gadu-orquestador.vercel.app';
  public readonly urlOrquestadorLocal = 'http://localhost:4200';

  // Detección automática del entorno de ejecución
  public readonly esEntornoNube = signal<boolean>(
    typeof window !== 'undefined' && !['localhost', '127.0.0.1'].includes(window.location.hostname)
  );

  // Modo de origen seleccionado por el usuario para la integración
  public readonly modoOrigen = signal<ModoOrigen>('auto');

  // Lista de microfrontends y aplicaciones registradas en el ecosistema GADU
  public readonly microfrontends = signal<Microfrontend[]>([
    {
      id: 'gadu-app-commerce',
      nombre: 'GADU App Commerce',
      descripcion: 'Tienda virtual de tecnología, hardware empresarial, checkout y pasarela Bold',
      dominioProduccion: 'https://www.gaduapp.com',
      dominioVercel: 'https://gadu-app-commerce.vercel.app',
      urlDesarrollo: 'http://localhost:4202',
      repositorio: 'gaducompany/gadu-app-commerce',
      rutaEnOrquestador: '/tienda',
      icono: 'tienda',
      estado: 'en_linea',
      esPrincipal: true,
      version: '2.0.0-angular20'
    },
    {
      id: 'gadu-company-portal',
      nombre: 'GADU Company Portal',
      descripcion: 'Portal institucional corporativo y portafolio de servicios empresariales',
      dominioProduccion: 'https://www.gaducompany.com',
      dominioVercel: 'https://gadu-company.vercel.app',
      urlDesarrollo: 'http://localhost:4201',
      repositorio: 'gaducompany/gadu-company',
      rutaEnOrquestador: '/portal',
      icono: 'portal',
      estado: 'en_linea',
      esPrincipal: false,
      version: '1.5.0'
    },
    {
      id: 'gadu-pos-system',
      nombre: 'GADU POS System',
      descripcion: 'Sistema de Punto de Venta, facturación electrónica y control de inventario en mostrador',
      dominioProduccion: 'https://gadu-pos-system.vercel.app',
      dominioVercel: 'https://gadu-pos-system.vercel.app',
      urlDesarrollo: 'http://localhost:4203',
      repositorio: 'gaducompany/gadu-pos-system',
      rutaEnOrquestador: '/pos',
      icono: 'pos',
      estado: 'en_linea',
      esPrincipal: false,
      version: '1.0.0'
    },
    {
      id: 'gadu-backend-api',
      nombre: 'GADU API Gateway & Microservicios',
      descripcion: 'API de Productos, Envíos, Pasarela Bold y Auth (Node.js / C# .NET Minimal APIs)',
      dominioProduccion: 'https://api.gaducompany.com',
      urlDesarrollo: 'http://localhost:4000',
      repositorio: 'gaducompany/gadu-backend-api',
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

  public establecerModoOrigen(modo: ModoOrigen): void {
    this.modoOrigen.set(modo);
  }

  /**
   * Obtiene la URL efectiva de un microfrontend según el entorno o selección
   */
  public obtenerUrlEfectiva(mfe: Microfrontend): string {
    const modo = this.modoOrigen();
    if (modo === 'produccion') {
      return mfe.dominioProduccion;
    }
    if (modo === 'vercel' && mfe.dominioVercel) {
      return mfe.dominioVercel;
    }
    if (modo === 'local') {
      return mfe.urlDesarrollo;
    }
    // Modo 'auto': Si está en la nube (Vercel) usa dominio producción, de lo contrario local
    return this.esEntornoNube() ? mfe.dominioProduccion : mfe.urlDesarrollo;
  }

  public actualizarEstado(id: string, nuevoEstado: 'en_linea' | 'sin_conexion' | 'comprobando'): void {
    this.microfrontends.update(lista =>
      lista.map(m => (m.id === id ? { ...m, estado: nuevoEstado } : m))
    );
  }
}
