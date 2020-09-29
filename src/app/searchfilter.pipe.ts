import { Item } from './item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Items: Item[], searchValue: string): Item[] {

    if (!Items || !searchValue) {
      return Items;
    }
    return Items.filter(item => 
      item.Name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      item.Description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      );
  }

}
