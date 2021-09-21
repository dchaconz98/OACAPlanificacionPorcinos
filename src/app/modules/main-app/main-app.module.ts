import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SimulationComponent } from './pages/simulation/simulation.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    HomeComponent,
    SimulationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    NgbModule,
    MatCardModule,
  ]
})
export class MainAppModule { }
