import { Pipe, PipeTransform } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';

@Pipe({
  name: 'chronoFormat'
})
export class ChronoFormatPipe implements PipeTransform {

  transform(chrono: Chrono): number {
    return chrono.heure + chrono.minute + chrono.seconde;
  }

}
