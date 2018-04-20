import { Injectable } from '@angular/core';
import {Language} from "../models/language";

@Injectable()
export class LanguageService {
  constructor() {

  }
  English = new Language(0, 'English', 'ENG');
  Russian = new Language(1, 'Russian', 'RUS');
  Ukrainian = new Language(2, 'Ukrainian', 'UA');

  lanuagesArray: Array<Language> = [
    this.English,
    this.Ukrainian,
    this.Russian
  ];

  public getLanguages(): Array<Language> {
    return this.lanuagesArray;
  }

}
