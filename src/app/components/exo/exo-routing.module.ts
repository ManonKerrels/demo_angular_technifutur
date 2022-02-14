import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciceCompoComponent } from './exercice-compo/exercice-compo.component';

const routes: Routes = [
    { path:"binding", component:ExerciceCompoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }