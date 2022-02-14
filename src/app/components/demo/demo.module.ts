import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './demo-routing.module';



@NgModule({
  declarations: [
    DemoBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }