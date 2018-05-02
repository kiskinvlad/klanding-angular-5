import {Deserializable} from '../deserializable';

/**
 * Color model
 * @class Color
 * @implements Deserializable<Color>
 */
export class Color implements Deserializable<Color> {
  id: number;
  name: string;
  conditions: Array<string>;
  imageSrc: string;
  animation: string;

   /**
   * @constructor
   * @param {id} id
   * @param {name} name
   * @param {conditions} conditions
   * @param {imageSrc} imageSrc
   * @param {animation} animation
   */
  constructor(id: number, name: string, conditions: Array<string>, imageSrc: string, animation: string) {
    this.id = id;
    this.name = name;
    this.conditions = conditions;
    this.imageSrc = imageSrc;
    this.animation = animation;
  }

  /**
   * Deserialize Color model
   * @param {input} any
   * @returns {this}
   */
  public deserialize(input: any): Color {
    Object.assign(this, input);
    return this;
  }
}
