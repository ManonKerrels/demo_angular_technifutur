import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './demo-routing.module';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { NavComponent } from './nav/nav.component';
import { DemoComponent } from './demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DemoCommuComponent } from './demo-commu/demo-commu.component';
import { DemoCommuEnfantComponent } from './demo-commu-enfant/demo-commu-enfant.component';



@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoPipeComponent,
    NavComponent,
    DemoComponent,
    DemoDirectiveComponent,
    HighlightDirective,
    DemoCommuComponent,
    DemoCommuEnfantComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }