import {Deserializable} from '../deserializable';

/**
 * Brand model
 * @class Brand
 * @implements Deserializable<Brand>
 */
export class Brand implements Deserializable<Brand> {
  id: number;
  name: string;
  src: string;

   /**
   * @constructor
   * @param {id} id
   * @param {name} name
   * @param {src} src
   */
  constructor(id: number, name: string, src: string) {
    this.id = id;
    this.name = name;
    this.src = src;
  }

   /**
   * Deserialize Brand model
   * @param {input} any
   * @returns {this}
   */
  public deserialize(input: any): Brand {
    Object.assign(this, input);
    return this;
  }
}
