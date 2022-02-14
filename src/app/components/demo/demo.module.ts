import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './demo-routing.module';
import { D2Component } from './d2/d2.component';



@NgModule({
  declarations: [
    DemoBindingComponent,
    D2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
  ]
})
export class ExoModule { }