import {Deserializable} from '../deserializable'

export class Qbox implements Deserializable<Qbox> {
  id: number;
  header: string;
  text: string;
  author: string;
  post: string;
  rating: number;

  constructor(id, header, text, author, post, rating) {
    this.id = id;
    this.header = header;
    this.text = text;
    this.author = author;
    this.post = post;
    this.rating = rating;
  }

  public deserialize(input: any): Qbox {
    Object.assign(this, input);
    return this;
  }
}
