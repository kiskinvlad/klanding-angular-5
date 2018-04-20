import {Deserializable} from '../deserializable'

export class Tech implements Deserializable<Tech> {
  id: number;
  link: string;
  mainText: any;
  secondText: any;
  thirdText: any;

  constructor(id, link, mainText, secondText, thirdText) {
    this.id = id;
    this.link = link;
    this.mainText = mainText;
    this.secondText = secondText;
    this.thirdText = thirdText;
  }

  public deserialize(input: any): Tech {
    Object.assign(this, input);
    return this;
  }
}
