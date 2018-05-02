import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Language} from '../models/language';
import {LanguageService} from '../services/language.service';
import { NgSelectComponent } from '@ng-select/ng-select';

/**
 * The header component.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/**
 * @class HeaderComponent
 * @implements OnInit
 */
export class HeaderComponent implements OnInit {

  /**
   * The dropdown menu LanguageSelect ng-select.
   * @typedef NgSelectComponent
   */
  @ViewChild('LanguageSelect') LanguageSelect: NgSelectComponent;

  languages: Array<Language>;
  selectedLanguage: number;
  isDropDownOpen: boolean = false;
  isHeaderHidden: boolean = false;

  /**
   * Set default language
   * @constructor
   * @param {languageService} LanguageService - Change language handler
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
  ngOnInit(): void {

  }

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

  /**
  * Hide header trigger
  * @returns void
  */
  public hideHeader(): void {
    this.isHeaderHidden = true;
  }
}
