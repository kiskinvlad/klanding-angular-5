import {Component, OnInit, ViewChild} from '@angular/core';
import {Language} from '../models/language';
import {LanguageService} from '../services/language.service';
import { NgSelectComponent } from '@ng-select/ng-select';

/**
 * The main-head component
 */
@Component({
  selector: 'app-main-head',
  templateUrl: './main-head.component.html',
  styleUrls: ['./main-head.component.scss']
})

/**
 * @class MainHeadComponent
 * @implements OnInit
 */
export class MainHeadComponent implements OnInit {

  /**
   * The dropdown menu LanguageSelect ng-select.
   * @typedef NgSelectComponent
   */
  @ViewChild('LanguageSelect') LanguageSelect: NgSelectComponent;

  languages: Array<Language>;
  selectedLanguage: any;
  isDropDownOpen: boolean = false;

  /**
   * Get languages, set dafault language
   * @constructor
   * @param {LanguageService} languageService
   */
  constructor(private languageService: LanguageService) {
    this.languages = languageService.getLanguages();
    this.selectedLanguage = this.languages[0].id;
  }

  /**
   * Lifecycle hook that is called after data-bound
   * properties of a directive are initialized.
   * @returns void
   */
  ngOnInit(): void { }

  /**
   * Open language dropdown menu
   * @returns void
   */
  public openLanguageSelect(): void {
    this.isDropDownOpen = true;
  }

  /**
   * Close language dropdown menu
   * @returns void
   */
  public closeLanguageSelect(): void {
    this.isDropDownOpen = false;
  }

  /**
   * Toggle dropdown menu
   * @returns void
   */
  public toggleDropdown(): void {
    this.LanguageSelect.open();
  }

}
