import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { Ex2Component } from './ex2/ex2.component';
import { ExerciceCompoComponent } from './exercice-compo/exercice-compo.component';
import { ExoFormComponent } from './exo-form/exo-form.component';
import { ExoProduitComponent } from './exo-produit/exo-produit.component';
import { ExoComponent } from './exo.component';
import { Exo3Component } from './exo3/exo3.component';
import { ParentCommuComponent } from './parent-commu/parent-commu.component';
import { Tp2Component } from './tp2/tp2.component';

const routes: Routes = [
  { path:"", component:ExoComponent, children:[
    { path: 'binding', component: ExerciceCompoComponent },
    { path: 'ex2', component: Ex2Component },
    { path:'chrono', component:ChronoComponent },
    { path: 'produit', component: ExoProduitComponent },
    { path:'parent', component: ParentCommuComponent },
    { path:'exoForm', component: ExoFormComponent },
    { path: 'exo3', component: Exo3Component },
    { path:'tp2', component: Tp2Component }
  ] }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExoRoutingModule { }