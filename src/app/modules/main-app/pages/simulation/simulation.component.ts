import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  simulationForm: FormGroup;
  
  max = 100;
  min = 1;
  step = 1;
  thumbLabel = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.simulationForm = this.formBuilder.group({
      intervaloEntreLotes: [null, [Validators.required]],
      duracionLactacion: [null, [Validators.required]],
      numLechonesNacidosVivos: [null, [Validators.required]],
      pesoVivoMatadero: [null, [Validators.required]],
      vacioSanitario: [null, [Validators.required]],
      diasPreparto: [null, [Validators.required]],
      totalDeDistribucionDeMadres: [null, [Validators.required]],
      eficienciaReproductiva: [1, [Validators.required]],
      mortalidadLactacion: [1, [Validators.required]],
      mortalidadTransicion: [1, [Validators.required]],
      mortalidadEngorde: [1, [Validators.required]],
      reemplazoDeMadresAnio: [1, [Validators.required]],
      reemplazoMachoanio: [1, [Validators.required]]
    });

  }

  goToHomePage() {
    this.router.navigate(['planificacionPorcinos/home']);
  }

  onSubmit() {
    console.log('form data is ', this.simulationForm.value);
  }


}
