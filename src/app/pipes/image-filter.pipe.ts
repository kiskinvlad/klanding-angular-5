import { Pipe, PipeTransform } from '@angular/core';

/**
 * Image filter
 *
 */
@Pipe({
  name: 'imageFilter'
})
/**
 * ImageFilterPipe class
 * @class ImageFilterPipe
 * @implements PipeTransform
 */
export class ImageFilterPipe implements PipeTransform {

  /**
   * Transform filtered array
   * @param {items} any[] - array items
   * @param {color} string - item color parameter
   * @returns any[]
   */
  public transform(items: any[], color: String): any[] {
    if (!items) { return []; }
    if (color) {
      const result = [];
      items.forEach((item) => {
        item.conditions.forEach((itemColor) => {
          if (itemColor === color) {
            result.push(item);
          }
        });
      });
      items = result;
      return items;
    } else {
      return items;
    }
  }
}
