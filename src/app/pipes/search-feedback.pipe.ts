import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFeedback'
})
export class SearchFeedbackPipe implements PipeTransform {
  transform(items: any[], searchValue: number, columnName: string): any[] {
    if (!items || !searchValue || !columnName) {
      return items;
    }

    return items.filter(item => {
      // Check if the specified column is the "ID" column and its value matches the search value
      return columnName === 'rating' && typeof item[columnName] === 'number' && item[columnName] === searchValue;
    });
  }

}
