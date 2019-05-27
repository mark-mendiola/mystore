import { Pipe, PipeTransform } from '@angular/core';

import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'PHP'): any {
    return null;
  }

}
