import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Page404Component } from './components/page404/page404.component';

// Définition des routes à utiliser pour avoir telle ou telle page
const routes: Routes = [
  { path:"", redirectTo: "accueil", pathMatch:'full' }, //cela crée une boucle infinie si on ne met pas le pathMatch (vérifie que le chemin qu'on veut emprunter est vide)
  { path:"accueil", component: AccueilComponent },
  { path:"demo", loadChildren: () => import('./components/demo/demo.module').then(m => m.DemoModule) },
  { path:"exo", loadChildren: () => import('./components/exo/exo.module').then(m => m.ExoModule)},
  { path:"404", component: Page404Component },
  { path:"**", redirectTo:"404" }, //** correspond à n'importe quelle url (ici non définie > l'ordre a donc une importance)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
