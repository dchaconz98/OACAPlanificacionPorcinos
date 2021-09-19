import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SimulationComponent } from './pages/simulation/simulation.component';


@NgModule({
  declarations: [
    HomeComponent,
    SimulationComponent
  ],
  imports: [
    CommonModule,
    MainAppRoutingModule
  ]
})
export class MainAppModule { }
