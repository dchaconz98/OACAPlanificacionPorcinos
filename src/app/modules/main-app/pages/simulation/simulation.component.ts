import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(200%)'}),
        animate('50ms 600ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class SimulationComponent implements OnInit {

  simulationForm: FormGroup;
  
  max = 100;
  min = 1;
  step = 1;
  thumbLabel = true;

  //inputs
  intervaloEntreLotes: any;
  duracionLactacion: any;
  numLechonesNacidosVivos: any;
  pesoVivoMatadero: any;
  vacioSanitario: any;
  diasPreparto: any;
  totalDeDistribucionDeMadres: any;
  eficienciaReproductiva: any;
  mortalidadLactacion: any;
  mortalidadTransicion: any;
  mortalidadEngorde: any;
  reemplazoDeMadresAnio: any;
  reemplazoMachoanio: any;

  //card general results
  duracionGestacionResult: any;
  intervaloCelosResult: any;
  intervaloPartosAnioResult: any;
  vidaUtilMadresResult: any;
  produccionMesResult: any;

  //card distribución madres results
  totalResult: any;
  numLoteResult: any;
  servicioLoteResult: any;
  lactanteResult: any;
  gestandoResult: any;

  //card servicio results
  partosAnioResult: any;
  reemplazoHembraAnioResult: any;
  reemplazoHembraMesResult: any;
  reemplazoHembraSemResult: any;
  reemplazoMachosAnioResult: any;
  verracosMRResult: any;
  verracoIaResult: any;

  //card nacimiento y crecimiento por lotes results
  lechonesNacidosVivosResult: any;
  mortalidadEnLactanciaResult: any;
  cerdosDestetadosResult: any;
  mortalidadEnTransicionResult: any;
  cerdosParaEngordeResult: any;
  mortalidadEnEngordeResult: any;

  //card engorde results
  cerdosLoteResult: any;
  cerdosMesResult: any;
  cerdosAnioResult: any;
  kgCerdosLoteMataderoResult: any;
  kgCerdosMesMataderoResult: any;
  kgCerdosAnioMataderoResult: any;


  mostrarResultados: boolean = false;

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

  /**
   * FUNCTION TO START SIMULATION
   *
   */
  onSubmit() {
    console.log('form data is ', this.simulationForm.value);
    this.setSimulationinputs(this.simulationForm.value);

    this.setGeneralCardResults();
    this.setDistribucionMadresCardResults();
    this.setServicioCardResults();
    this.setNacimientoYCrecimientoporLoteCardResults()
    this.setEngordeCardResults();

    this.mostrarResultados = true;
  }

  /**
   * FUNCTION TO SET THE SIMULATION CARDS COMPONENTS INPUTS
   *
   */
  setSimulationinputs(inputs:any) {
    this.intervaloEntreLotes = inputs.intervaloEntreLotes;
    this.duracionLactacion = inputs.duracionLactacion;
    this.numLechonesNacidosVivos = inputs.numLechonesNacidosVivos;
    this.pesoVivoMatadero = inputs.pesoVivoMatadero;
    this.vacioSanitario = inputs.vacioSanitario;
    this.diasPreparto = inputs.diasPreparto;
    this.totalDeDistribucionDeMadres = inputs.totalDeDistribucionDeMadres;

    this.eficienciaReproductiva = inputs.eficienciaReproductiva / 100;
    this.mortalidadLactacion = inputs.mortalidadLactacion / 100;
    this.mortalidadTransicion = inputs.mortalidadTransicion / 100;
    this.mortalidadEngorde = inputs.mortalidadEngorde / 100;
    this.reemplazoDeMadresAnio = inputs.reemplazoDeMadresAnio / 100;
    this.reemplazoMachoanio = inputs.reemplazoMachoanio / 100;
  }


  /**
   * FUNCTION TO SET THE GENERAL CARD RESULTS
   *
   */
  setGeneralCardResults() {
    this.duracionGestacionResult = 115;
    this.intervaloCelosResult = 7;
    this.vidaUtilMadresResult = 3.00;
    this.intervaloPartosAnioResult = this.duracionLactacion + this.duracionGestacionResult + this.intervaloCelosResult;
    this.produccionMesResult = (30/this.intervaloEntreLotes).toFixed(2);
  }

  /**
   * FUNCTION TO SET THE DISTRIBUCION MADRES CARD RESULTS
   *
   */
  setDistribucionMadresCardResults() {
    this.totalResult = this.totalDeDistribucionDeMadres;
    this.numLoteResult = ((this.duracionLactacion + this.duracionGestacionResult + this.intervaloCelosResult)/this.intervaloEntreLotes).toFixed(0);
    this.lactanteResult = (this.totalResult / this.numLoteResult).toFixed(2);

    this.servicioLoteResult = (1 - this.eficienciaReproductiva);
    this.servicioLoteResult = (this.servicioLoteResult * this.lactanteResult).toFixed(2);
    this.servicioLoteResult = parseFloat(this.servicioLoteResult)  + parseFloat(this.lactanteResult);

    this.gestandoResult = (this.totalResult - this.lactanteResult).toFixed(2);
  }

  /**
   * FUNCTION TO SET THE SERVICIO CARD RESULTS
   *
   */
  setServicioCardResults() {
    this.partosAnioResult = (365/this.intervaloPartosAnioResult).toFixed(2);
    this.reemplazoHembraAnioResult = (this.totalResult * this.reemplazoDeMadresAnio).toFixed(2);
    this.reemplazoHembraMesResult = (this.reemplazoHembraAnioResult/12).toFixed(2);
    this.reemplazoHembraSemResult = (this.reemplazoHembraAnioResult/52).toFixed(2);
    this.verracosMRResult = (this.totalResult / 10).toFixed(2); 
    this.verracoIaResult = (this.totalResult / 100).toFixed(2);
    this.reemplazoMachosAnioResult = (this.reemplazoMachoanio*((this.totalResult / 10)  + (this.totalResult / 100))).toFixed(2);
  }

  /**
   * FUNCTION TO SET THE NACIMIENTO Y CRECIMIENTO POR LOTE CARD RESULTS
   *
   */
  setNacimientoYCrecimientoporLoteCardResults() {
    this.lechonesNacidosVivosResult = (this.lactanteResult * this.numLechonesNacidosVivos).toFixed(0);
    this.mortalidadEnLactanciaResult = (this.lechonesNacidosVivosResult * this.mortalidadLactacion).toFixed(0);
    this.cerdosDestetadosResult = this.lechonesNacidosVivosResult - this.mortalidadEnLactanciaResult;
    this.mortalidadEnTransicionResult = (this.cerdosDestetadosResult * this.mortalidadTransicion).toFixed(0);
    this.cerdosParaEngordeResult =  (this.cerdosDestetadosResult - (this.cerdosDestetadosResult  * this.mortalidadTransicion)).toFixed(0);
    this.mortalidadEnEngordeResult = (this.cerdosParaEngordeResult * this.mortalidadEngorde).toFixed(0)
  }

  /**
   * FUNCTION TO SET THE ENGORDE CARD RESULTS
   *
   */
  setEngordeCardResults() {
    this.cerdosLoteResult = this.cerdosParaEngordeResult - this.mortalidadEnEngordeResult;
    this.cerdosMesResult = (this.cerdosLoteResult * this.produccionMesResult).toFixed(2);
    this.cerdosAnioResult = (this.cerdosLoteResult * this.produccionMesResult * 12).toFixed(2);
    this.kgCerdosLoteMataderoResult = (this.cerdosLoteResult * this.pesoVivoMatadero).toFixed(2);
    this.kgCerdosMesMataderoResult = (this.kgCerdosLoteMataderoResult * 4).toFixed(2);
    this.kgCerdosAnioMataderoResult = (this.cerdosLoteResult * this.produccionMesResult * 12 * this.pesoVivoMatadero).toFixed(2);
  }

  /**
   * FUNCTION TO SCROLL TO TARGET
   *
   */
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
