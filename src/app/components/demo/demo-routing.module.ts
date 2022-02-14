import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
    { path:"", component:DemoComponent, children:[
      { path: 'binding', component: DemoBindingComponent },
      { path: 'pipe', component: DemoPipeComponent },
    ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }