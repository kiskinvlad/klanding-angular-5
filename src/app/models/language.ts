import {Deserializable} from '../deserializable';

/**
 * Language model
 * @class Language
 * @implements Deserializable<Language>
 */
export class Language implements Deserializable<Language> {
  id: number;
  name: string;
  short: string;

  /**
   * @constructor
   * @param {id} id
   * @param {name} name
   * @param {short} short
   */
  constructor(id: number, name: string, short: string) {
    this.id = id;
    this.name = name;
    this.short = short;
  }

  /**
   * Deserialize Language model
   * @param {input} any
   * @returns {this}
   */
  public deserialize(input: any): Language {
    Object.assign(this, input);
    return this;
  }
}
