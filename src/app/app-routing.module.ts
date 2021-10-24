import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '',
    redirectTo: 'planificacionPorcinos/inicio',
    pathMatch: 'full'
  },

  {
    path: 'planificacionPorcinos',
    loadChildren: () => import('./modules/main-app/main-app.module').then(m => m.MainAppModule),
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
