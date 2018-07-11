import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPad',
})
export class ZeroPadPipe implements PipeTransform {
  /**
   * Takes a number and zero pads it.
   */
  transform(value: string) {
    return parseInt(value) < 10 ? '0'+value : '' + value;
  }

}
