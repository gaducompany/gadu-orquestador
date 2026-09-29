import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ClienteAliado {
  id: string;
  nombre: string;
  sector: string;
  rutaLogo: string;
}

@Component({
  selector: 'app-banda-clientes-orquestador',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-12 bg-white/70 backdrop-blur-sm border-y border-slate-200/80 overflow-hidden relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span class="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-[#0078D4] border border-blue-200">
          Ecosistema Empresarial GADU
        </span>
        <h3 class="text-sm sm:text-base font-bold text-slate-800 mt-2">
          Empresas que potencian su operación con la tecnología y servicios de GADU Company
        </h3>
      </div>

      <!-- Marquesina Continua Sin Fin -->
      <div class="mascara-desvanecimiento-x w-full overflow-hidden">
        <div class="animacion-marquesina flex items-center gap-12 sm:gap-16 py-2">
          <!-- Primera tanda de logos -->
          @for (cliente of clientes; track cliente.id) {
            <div class="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
              <img 
                [src]="cliente.rutaLogo" 
                [alt]="cliente.nombre" 
                class="h-8 sm:h-10 w-auto max-w-[130px] object-contain"
                onerror="this.style.display='none'"
              />
            </div>
          }

          <!-- Segunda tanda duplicada para loop suave -->
          @for (cliente of clientes; track 'dup-' + cliente.id) {
            <div class="shrink-0 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-105">
              <img 
                [src]="cliente.rutaLogo" 
                [alt]="cliente.nombre" 
                class="h-8 sm:h-10 w-auto max-w-[130px] object-contain"
                onerror="this.style.display='none'"
              />
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class BandaClientesOrquestadorComponent {
  readonly clientes: ClienteAliado[] = [
    {
      id: 'cli-directv',
      nombre: 'DirecTV',
      sector: 'Telecomunicaciones y Entretenimiento',
      rutaLogo: 'assets/logos/Directv.png'
    },
    {
      id: 'cli-emcali',
      nombre: 'Emcali',
      sector: 'Servicios Públicos y Energía',
      rutaLogo: 'assets/logos/Emcali.png'
    },
    {
      id: 'cli-interrapidisimo',
      nombre: 'Inter Rapidísimo',
      sector: 'Logística y Mensajería Nacional',
      rutaLogo: 'assets/logos/Interrapidisimo.png'
    },
    {
      id: 'cli-jumbo',
      nombre: 'Jumbo Cencosud',
      sector: 'Retail y Consumo Masivo',
      rutaLogo: 'assets/logos/Jumbo.png'
    },
    {
      id: 'cli-clinica-valle-lili',
      nombre: 'Clínica Valle del Lili',
      sector: 'Salud y Alta Complejidad',
      rutaLogo: 'assets/logos/ClinicaValleLili.png'
    },
    {
      id: 'cli-ingenio-manuelita',
      nombre: 'Ingenio Manuelita',
      sector: 'Agroindustria y Bioenergía',
      rutaLogo: 'assets/logos/IngenioManuelita.png'
    },
    {
      id: 'cli-telemark',
      nombre: 'Telemark Spain',
      sector: 'BPO y Contact Centers Internacionales',
      rutaLogo: 'assets/logos/TelemarkSpain.png'
    }
  ];
}
