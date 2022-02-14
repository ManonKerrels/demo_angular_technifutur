import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureFormatPipe } from './pipes/voiture-format.pipe';



@NgModule({
  declarations: [VoitureFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [ VoitureFormatPipe ]
})
export class SharedModule { }
