import {Deserializable} from '../deserializable'

export class Brand implements Deserializable<Brand> {
  id: number;
  name: string;
  src: string;

  constructor(id, name, src) {
    this.id = id;
    this.name = name;
    this.src = src;
  }

  public deserialize(input: any): Brand {
    Object.assign(this, input);
    return this;
  }
}
