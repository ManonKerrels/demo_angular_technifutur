import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { Ex2Component } from './ex2/ex2.component';
import { ExerciceCompoComponent } from './exercice-compo/exercice-compo.component';
import { ExoComponent } from './exo.component';

const routes: Routes = [
  { path:"", component:ExoComponent, children:[
    { path: 'binding', component: ExerciceCompoComponent },
    { path: 'ex2', component: Ex2Component },
    { path:'chrono', component:ChronoComponent }
  ] }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }