import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoCommuComponent } from './demo-commu/demo-commu.component';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoComponent } from './demo.component';
import { ObsDemoComponent } from './obs-demo/obs-demo.component';
import { ProduitsComponent } from './produits/produits.component';

const routes: Routes = [
    { path:"", component:DemoComponent, children:[
      { path: 'binding', component: DemoBindingComponent },
      { path: 'pipe', component: DemoPipeComponent },
      { path: 'directive', component:DemoDirectiveComponent },
      { path:'demoCommu', component:DemoCommuComponent },
      { path:'demoForms', component:DemoFormsComponent },
      { path: 'demoProduit', component: ProduitsComponent },
      { path: 'obs', component: ObsDemoComponent }
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }