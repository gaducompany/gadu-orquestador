import { afterNextRender, Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { BarraOrquestadorComponent } from './ui/barra-navegacion/barra-orquestador.component';
import { PiePaginaOrquestadorComponent } from './ui/comun/pie-pagina-orquestador.component';
import { inicializarIconosLucide } from './comun/lucide';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraOrquestadorComponent, PiePaginaOrquestadorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly router = inject(Router);

  constructor() {
    afterNextRender(() => {
      inicializarIconosLucide();
    });

    this.router.events
      .pipe(filter((evento): evento is NavigationEnd => evento instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          inicializarIconosLucide();
        }, 50);
      });
  }
}
