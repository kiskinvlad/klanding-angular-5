import {Deserializable} from '../deserializable'

export class Color implements Deserializable<Color> {
  id: number;
  name: string;
  conditions: Array<string>;
  imageSrc: string;
  animation: string;

  constructor(id, name, conditions, imageSrc, animation) {
    this.id = id;
    this.name = name;
    this.conditions = conditions;
    this.imageSrc = imageSrc;
    this.animation = animation;
  }

  public deserialize(input: any): Color {
    Object.assign(this, input);
    return this;
  }
}
