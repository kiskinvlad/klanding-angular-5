import {Deserializable} from '../deserializable';

/**
 * Accordion model
 * @class Accordion
 * @implements Deserializable<Accordion>
 */
export class Accordion implements Deserializable<Accordion> {
  id: number;
  header: string;
  text: string;

  /**
   * @constructor
   * @param {id} id
   * @param {header} header
   * @param {text} text
   */
  constructor(id: number, header: string, text: string) {
    this.id = id;
    this.header = header;
    this.text = text;
  }

  /**
   * Deserialize Accordion model
   * @param {input} any
   * @returns {this}
   */
  public deserialize(input: any): Accordion {
    Object.assign(this, input);
    return this;
  }
}
