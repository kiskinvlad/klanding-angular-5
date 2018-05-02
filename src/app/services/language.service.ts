import { Injectable } from '@angular/core';
import {Language} from '../models/language';

/**
 * Language service
 * @class LanguageService
 */
@Injectable()
export class LanguageService {

  /**
   * @constructor
   */
  constructor() { }
  English: Language = new Language(0, 'English', 'ENG');
  Russian: Language = new Language(1, 'Russian', 'RUS');
  Ukrainian: Language = new Language(2, 'Ukrainian', 'UA');

  lanuagesArray: Array<Language> = [
    this.English,
    this.Ukrainian,
    this.Russian
  ];

  /**
   * Push languages to language array
   * @returns Array<Language>
   */
  public getLanguages(): Array<Language> {
    return this.lanuagesArray;
  }

}
