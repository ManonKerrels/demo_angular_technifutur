import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChronoComponent } from './chrono/chrono.component';
import { ExerciceCompoComponent } from './exercice-compo/exercice-compo.component';
import { ExoFormComponent } from './exo-form/exo-form.component';
import { ExoProduitComponent } from './exo-produit/exo-produit.component';
import { ExoComponent } from './exo.component';
import { Exo3Component } from './exo3/exo3.component';
import { ParentCommuComponent } from './parent-commu/parent-commu.component';
import { Tp2Component } from './tp2/tp2.component';
import { ObjectifComponent } from './objectif/objectif.component';
import { MenuComponent } from './menu/menu.component';
import { PanierComponent } from './panier/panier.component';
import { PlatComponent } from './menu/plat/plat.component';
import { Exo4Component } from './exo4/exo4.component';
import { PairComponent } from './exo4/pair/pair.component';
import { ImpairComponent } from './exo4/impair/impair.component';

const routes: Routes = [
  { path:"", component:ExoComponent, children:[
    { path: 'binding', component: ExerciceCompoComponent },
    { path:'chrono', component:ChronoComponent },
    { path: 'produit', component: ExoProduitComponent },
    { path:'parent', component: ParentCommuComponent },
    { path:'exoForm', component: ExoFormComponent },
    { path: 'exo3', component: Exo3Component },
    { path:'tp2', component: Tp2Component },
    { path:'obj', component: ObjectifComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'plat/:id', component: PlatComponent },
    { path: 'exo4', component: Exo4Component },
    { path:'pair/:toto', component: PairComponent },
    { path:'impair/:dede', component: ImpairComponent }
  ] }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExoRoutingModule { }