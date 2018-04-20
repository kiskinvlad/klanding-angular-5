import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  public transform(items: any[], color: String): any[] {
    if (!items) return [];
    if(color) {
      let result = [];
      items.forEach((item) => {
        item.conditions.forEach((itemColor) => {
          if(itemColor === color) {
            result.push(item);
          }
        })
      });
      items = result;
      return items;
    } else {
      return items;
    }
  }
}
