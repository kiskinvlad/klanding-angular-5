import {Component, OnInit, ViewChild} from '@angular/core';
import {Language} from "../models/language";
import {LanguageService} from "../services/language.service";

@Component({
  selector: 'app-main-head',
  templateUrl: './main-head.component.html',
  styleUrls: ['./main-head.component.scss']
})
export class MainHeadComponent implements OnInit {
  @ViewChild('LanguageSelect') LanguageSelect;

  languages: Array<Language>;
  selectedLanguage: any;
  isDropDownOpen: boolean = false;


  constructor(private languageService: LanguageService) {
    this.languages = languageService.getLanguages();
    this.selectedLanguage = this.languages[0].id
  }

  ngOnInit() {

  }

  public openLanguageSelect(): void {
    this.isDropDownOpen = true;
  }

  public closeLanguageSelect(): void {
    this.isDropDownOpen = false;
  }

  public toggleDropdown(): void {
    this.LanguageSelect.open();
  }

}
