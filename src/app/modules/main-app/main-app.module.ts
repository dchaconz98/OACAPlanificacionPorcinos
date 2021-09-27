import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAppRoutingModule } from './main-app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SimulationComponent } from './pages/simulation/simulation.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';



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
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatFormFieldModule
  ]
})
export class MainAppModule { }
