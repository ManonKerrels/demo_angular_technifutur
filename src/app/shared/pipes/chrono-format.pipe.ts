import { Pipe, PipeTransform } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';

@Pipe({
  name: 'chronoFormat',
  pure: false
})
export class ChronoFormatPipe implements PipeTransform {

  transform(chrono: Chrono): string {
    return chrono.minute + ":" + chrono.seconde;
  }

}
