import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure_impure'
})

export class PureImpurePipe implements PipeTransform {

  transform(value: string) {
    console.log(value);
    return value.toUpperCase();
  }

}
