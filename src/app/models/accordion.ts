import {Deserializable} from '../deserializable'

export class Accordion implements Deserializable<Accordion> {
  id: number;
  header: string;
  text: string;

  constructor(id, header, text) {
    this.id = id;
    this.header = header;
    this.text = text;
  }

  public deserialize(input: any): Accordion {
    Object.assign(this, input);
    return this;
  }
}
