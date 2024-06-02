import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPaymentById'
})
export class SearchPaymentByIdPipe implements PipeTransform {

 
  transform(items: any[], searchValue: number): any[] {
    if (!items || searchValue === null || searchValue === undefined) {
      return items;
    }

    return items.filter(item => {
      // Filter based on the numeric value entered by the user
      for (const key in item) {
        if (typeof item[key] === 'number' && item[key] === searchValue) {
          return true;
        }
      }
      return false;
    });
  }


}


/*transform(items: any[], searchValue: number, columnName: string): any[] {
  if (!items || !searchValue || !columnName) {
    return items;
  }

  return items.filter(item => {
    // Check if the specified column is the "ID" column and its value matches the search value
    return columnName === 'paymentId' && typeof item[columnName] === 'number' && item[columnName] === searchValue;
  });
}*/
