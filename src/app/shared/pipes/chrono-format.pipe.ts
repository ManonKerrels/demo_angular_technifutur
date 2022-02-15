import { Pipe, PipeTransform } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';

@Pipe({
  name: 'chronoFormat',
  pure: false
})
export class ChronoFormatPipe implements PipeTransform {

  transform(value: Chrono): string {
    const minute = value.minute < 10 ? '0'+value.minute : value.minute;
    const seconde = value.seconde < 10 ? '0'+value.seconde : value.seconde;

    return minute + ":" + seconde;
  }

}
