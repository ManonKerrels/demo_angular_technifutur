import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './demo-routing.module';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { NavComponent } from './nav/nav.component';
import { DemoComponent } from './demo.component';
import { VoitureFormatPipe } from 'src/app/shared/pipes/voiture-format.pipe';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoPipeComponent,
    NavComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }