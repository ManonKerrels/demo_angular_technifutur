import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { ExerciceCompoComponent } from './components/exercice-compo/exercice-compo.component';

// Définition des routes à utiliser pour avoir telle ou telle page
const routes: Routes = [
  { path:"", redirectTo: "accueil", pathMatch:'full' }, //cela crée une boucle infinie si on ne met pas le pathMatch (vérifie que le chemin qu'on veut emprunter est vide)
  { path:"accueil", component: AccueilComponent },
  { path:"demo", component: DemoBindingComponent },
  { path:"exo", component: ExerciceCompoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
