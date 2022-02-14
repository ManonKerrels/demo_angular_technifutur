import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { ExerciceCompoComponent } from './components/exercice-compo/exercice-compo.component';

// Définition des routes à utiliser pour avoir telle ou telle page
const routes: Routes = [
  { path:"demo", component:DemoBindingComponent },
  { path:"exo", component:ExerciceCompoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
