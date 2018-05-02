import {Deserializable} from '../deserializable';

/**
 * Color model
 * @class Qbox
 * @implements Deserializable<Qbox>
 */
export class Qbox implements Deserializable<Qbox> {
  id: number;
  header: string;
  text: string;
  author: string;
  post: string;
  rating: number;

  /**
   * @constructor
   * @param {id} id
   * @param {header} header
   * @param {text} text
   * @param {author} author
   * @param {post} post
   * @param {rating} rating
   */
  constructor(id: number, header: string, text: string, author: string, post: string, rating: number) {
    this.id = id;
    this.header = header;
    this.text = text;
    this.author = author;
    this.post = post;
    this.rating = rating;
  }

  /**
   * Deserialize Qbox model
   * @param {input} any
   * @returns {this}
   */
  public deserialize(input: any): Qbox {
    Object.assign(this, input);
    return this;
  }
}
