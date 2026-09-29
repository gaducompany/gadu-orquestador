# GADU ORQUESTADOR - Plataforma Shell de Microfrontends

Plataforma anfitriona (Host / Shell) y centro de observabilidad para el ecosistema tecnológico de **GADU Company**, desarrollada con **Angular 20+**, detección de cambios **Zoneless** (`provideZonelessChangeDetection`), reactividad granular basada en **Signals**, iconografía corporativa **Lucide Icons** y arquitectura limpia en español.

---

## Identidad Corporativa y Logotipo

El orquestador utiliza los activos de marca oficiales de la organización:
- **Logotipo Principal:** Ubicado en `public/assets/logos/GADUCompany.png`.
- **Favicon:** Ubicado en `public/favicon.ico`.
- **Iconografía:** Sistema de vectores corporativos mediante **Lucide Icons** (`data-lucide`), evitando el uso de emojis en toda la plataforma.

---

## Propósito del Orquestador

El orquestador actúa como la aplicación base unificada que coordina, aloja y supervisa los microfrontends y servicios distribuidos de la compañía:

1. **Desacoplamiento Operativo:** Cada microfrontend posee su propio repositorio, ciclo de vida, dependencias y despliegue independiente.
2. **Monitoreo Centralizado:** Telemetría en tiempo real sobre la disponibilidad, latencia y salud de cada nodo (Microfrontends, API Gateway, PostgreSQL y Redis).
3. **Navegación Unificada:** Experiencia fluida para alternar entre el portal corporativo, la tienda virtual B2B y las herramientas de control institucional.

---

## Topología del Ecosistema y Despliegues

Matriz oficial de infraestructura, repositorios y dominios del ecosistema tecnológico GADU:

| Aplicación / Servicio | Repositorio GitHub | Puerto Local | Dominio Producción | Espejo Vercel | Descripción |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **GADU Orquestador** | `gaducompany/gadu-orquestador` | **`4200`** | `https://gadu-orquestador.vercel.app` | `gadu-orquestador.vercel.app` | Shell / Host central de microfrontends y telemetría |
| **GADU Company Portal** | `gaducompany/gadu-company` | **`4201`** | **`https://www.gaducompany.com`** | `gadu-company.vercel.app` | Portal institucional corporativo y portafolio de servicios |
| **GADU App Commerce** | `gaducompany/gadu-app-commerce` | **`4202`** | **`https://www.gaduapp.com`** | `gadu-app-commerce.vercel.app` | Tienda virtual tecnológica, checkout y pasarela Bold |
| **GADU POS System** | `gaducompany/gadu-pos-system` | **`4203`** | `https://gadu-pos-system.vercel.app` | `gadu-pos-system.vercel.app` | Sistema de punto de venta, inventario en mostrador y facturación |
| **API Gateway & Microservicios** | `gaducompany/gadu-backend-api` | **`4000`** | `https://api.gaducompany.com` | - | Minimal APIs + Express (Catálogo, Envíos, Pagos Bold) |
| **PostgreSQL Database** | Repositorio Privado / Docker | **`5432`** | `db.gaducompany.com` | - | Base de datos relacional y catálogo de inventario |
| **Redis Pub/Sub & SSE** | Repositorio Privado / Docker | **`6379`** | `redis.gaducompany.com` | - | Canales reactivos en tiempo real para eventos de stock |

---

## Módulos y Rutas en el Orquestador

- **`/` (Inicio / Hub Central):** Tablero principal con catálogo de microfrontends activos, estado operativo en tiempo real y enlaces directos tanto a dominios de producción como a espejos de Vercel.
- **`/tienda` (Contenedor E-Commerce):** Integración embebida y controlada de **GADU App Commerce** con selector dinámico de entorno (`www.gaduapp.com`, espejo en Vercel o desarrollo local `:4202`), recarga de marco y apertura externa.
- **`/monitor` (Monitor de Salud):** Tablero de observabilidad en tiempo real con telemetría de latencias, disponibilidad de nodos HTTP en la nube y servicios de persistencia.

---

## Estructura del Proyecto (Clean Architecture en Español)

El código fuente respeta una separación estricta de responsabilidades por capas en idioma español:

```
src/app/
├── dominio/
│   └── modelos/
│       └── microfrontend.modelo.ts       # Entidades de dominio: Microfrontend, Estado y MetricaSalud
├── aplicacion/
│   └── estado-orquestador.service.ts     # Gestión de estado reactivo con Signals (MFE registrados y activo)
├── comun/
│   └── lucide.ts                         # Inicialización y rehidratación de Lucide Icons
└── ui/
    ├── barra-navegacion/
    │   └── barra-orquestador.component.ts # Header superior con logotipo oficial, navegación y selector de apps
    └── paginas/
        ├── inicio-orquestador.component.ts # Hub visual con tarjetas de microfrontends federados
        ├── contenedor-tienda.component.ts  # Contenedor iframe con puente seguro hacia puerto 4202
        └── monitor-salud.component.ts      # Panel de telemetría, simulación de latencias y chequeos
```

---

## Guía de Puesta en Marcha Local

Para ejecutar el ecosistema completo en paralelo, inicia cada proyecto en terminales independientes:

### 1. Iniciar el Orquestador (Puerto 4200)
```bash
cd gadu-orquestador
npm install
npm start
# Disponible en: http://localhost:4200
```

### 2. Iniciar GADU Company Portal (Puerto 4201)
```bash
cd ../gadu-company-portal-v2
npm install
npm start
# Disponible en: http://localhost:4201
```

### 3. Iniciar GADU App Commerce (Puerto 4202)
```bash
cd ../gadu-app-commerce-v2
npm install
npm start
# Disponible en: http://localhost:4202
```

---

## Comandos Disponibles en este Repositorio

| Comando | Acción |
| :--- | :--- |
| `npm start` | Inicia el servidor de desarrollo en `http://localhost:4200` con recarga en vivo |
| `npm run build` | Compila los artefactos de producción optimizados en el directorio `dist/` |
| `npm run watch` | Compila en modo desarrollo con observación continua de cambios |
| `npm test` | Ejecuta las pruebas unitarias del orquestador mediante Karma |

---

## Estándares Técnicos Implementados

- **Angular 20 Standalone & Zoneless:** Sin dependencia de `zone.js`, optimizando el rendimiento y reduciendo el consumo de memoria mediante `provideZonelessChangeDetection()`.
- **Estrategia OnPush Universal:** Todos los componentes UI implementan `ChangeDetectionStrategy.OnPush`.
- **Lucide Icons:** Iconografía corporativa limpia mediante la librería estándar de vectores Lucide, sin emojis.
- **Tailwind CSS 3+:** Estilos utilitarios para interfaces empresariales limpias y adaptativas.
- **Tipado Estricto de TypeScript:** Compilación estricta con verificación de nulos y tipado explícito en modelos de dominio.
