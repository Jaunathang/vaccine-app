import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MaladieComponent } from './maladie/maladie.component';
import { PreventionComponent } from './prevention/prevention.component';
import { TestComponent } from './test/test.component';
import { VaccinComponent } from './vaccin/vaccin.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'maladie', component: MaladieComponent },
  { path: 'vaccin', component: VaccinComponent },
  { path: 'prevention', component: PreventionComponent },
  { path: 'test', component: TestComponent },
  // On appelle le path '**' la wild card. Elle représente tout ce qui n'est pas une route connue.
  { path: '**', redirectTo: '/accueil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
