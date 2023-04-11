import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./models/product.model";
@Pipe({
  name: 'sortByNameList'
})
export class SortByNameListPipe implements PipeTransform {

  transform(products: Product[], sort: string): Product[] {
    if (!sort.trim()) {
        return products;
    }
    if (sort === 'sortByDate')
    {
        return products.sort((a, b) => {
            return b.dateAdded.getTime() - a.dateAdded.getTime()
        });
    } else {
      return products.sort((a, b) => {
        if (sort === 'sortByNameListAsc') {
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        }
        else return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
      });
    }
  }

}
