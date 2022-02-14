import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { D2Component } from './components/demo/d2/d2.component';
import { DemoBindingComponent } from './components/demo/demo-binding/demo-binding.component';
import { DemoComponent } from './components/demo/demo.component';
import { Ex2Component } from './components/exo/ex2/ex2.component';
import { ExerciceCompoComponent } from './components/exo/exercice-compo/exercice-compo.component';
import { ExoComponent } from './components/exo/exo.component';
import { Page404Component } from './components/page404/page404.component';

// Définition des routes à utiliser pour avoir telle ou telle page
const routes: Routes = [
  { path:"", redirectTo: "accueil", pathMatch:'full' }, //cela crée une boucle infinie si on ne met pas le pathMatch (vérifie que le chemin qu'on veut emprunter est vide)
  { path:"accueil", component: AccueilComponent },
  { path:"demo", component: DemoComponent, children: [
    { path:"binding", component:DemoBindingComponent },
    { path:"d2", component:D2Component },
  ] },
  { path:"exo", component:ExoComponent, children: [
    { path:"binding", component:ExerciceCompoComponent },
    { path:"ex2", component:Ex2Component },
  ] },
  { path:"404", component: Page404Component },
  { path:"**", redirectTo:"404" }, //** correspond à n'importe quelle url (ici non définie > l'ordre a donc une importance)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
