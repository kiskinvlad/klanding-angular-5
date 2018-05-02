import {Deserializable} from '../deserializable';
import {TechOption} from '../tech-option';
/**
 * Tech model
 * @class Tech
 * @implements Deserializable<Tech>
 */
export class Tech implements Deserializable<Tech> {
  id: number;
  link: string;
  mainText: {animation: string, text: string};
  secondText: {animation: string, text: string};
  thirdText: {animation: string, text: string};

  /**
   * @constructor
   * @param {id} id
   * @param {link} link
   * @param {mainText} mainText
   * @param {secondText} secondText
   * @param {thirdText} thirdText
   */
  constructor(id: number,
    link: string,
    mainText: TechOption,
    secondText: TechOption,
    thirdText: TechOption) {
    this.id = id;
    this.link = link;
    this.mainText = mainText;
    this.secondText = secondText;
    this.thirdText = thirdText;
  }

  /**
   * Deserialize Tech model
   * @param {input} any
   * @returns {this}
   */
  public deserialize(input: any): Tech {
    Object.assign(this, input);
    return this;
  }
}

