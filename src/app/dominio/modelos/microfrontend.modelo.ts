/**
 * GADU ORQUESTADOR - MODELO DE DOMINIO: MICROFRONTENDS Y APLICACIONES FEDERADAS
 */

export type EstadoMicrofrontend = 'en_linea' | 'sin_conexion' | 'comprobando';

export interface Microfrontend {
  id: string;
  nombre: string;
  descripcion: string;
  dominioProduccion: string;
  urlDesarrollo: string;
  rutaEnOrquestador: string;
  icono: string;
  estado: EstadoMicrofrontend;
  esPrincipal: boolean;
  version: string;
}

export interface MetricaSalud {
  tiempoRespuestaMs: number;
  ultimoChequeo: string;
  estadoHttp: number;
}
