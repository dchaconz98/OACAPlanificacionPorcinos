import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  students : any = [
    {
      name: 'José Pérez',
      email: 'mobilefl44@gmail.com'
    },
    {
      name: 'José Silva',
      email: 'josesilva2796@gmail.com'
    },
    {
      name: 'Ranvier Padilla',
      email: 'ranvierpadilla@gmail.com'
    },
    {
      name: 'Diego Chacón',
      email: 'diegochz98@gmail.com'
    }
  ];

  professors : any = [
    {
      name: 'Profesora Yosly Hernández',
      email: 'yoslyhernandez@gmail.com'
    },
    {
      name: 'Profesor Charly Farfán',
      email: 'charlyfarfan@gmail.com'
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  /**
   * FUNCTION TO SCROLL TO TARGET
   *
   */
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  /**
   * FUNCTION TO NAVIGATE TO SIMULATION PAGE
   *
   */
  goToSimulation() {
    this.router.navigate(['planificacionPorcinos/simulation']);
  }
}
