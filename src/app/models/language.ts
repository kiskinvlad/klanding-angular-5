import {Deserializable} from '../deserializable'

export class Language implements Deserializable<Language>{
  id: number;
  name: string;
  short: string;

  constructor(id, name, short) {
    this.id = id;
    this.name = name;
    this.short = short;
  }

  public deserialize(input: any): Language {
    Object.assign(this, input);
    return this;
  }
}
