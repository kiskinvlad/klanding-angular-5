import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Tech} from "../models/tech";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
  providers: [ApiService]
})
export class MainBodyComponent implements OnInit {
  images: Tech[] = [];
  searchBounce: boolean;
  isMobileNavHidden: boolean;
  navIsOnTop: boolean;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getImages();
    this.searchBounce = null;
    this.isMobileNavHidden = false;
    this.navIsOnTop = true;
  }

  public toggleSearchInput(): void {
    this.searchBounce = !this.searchBounce;
  }

  public toggleNavigation(): void {
    this.isMobileNavHidden = !this.isMobileNavHidden;
  }

  public toggleAnimation(event, index): void {
    let h3Elem = event.target.querySelectorAll('h3');
    let h2Elem = event.target.querySelectorAll('h2');
    let pElem = event.target.querySelectorAll('p');
    if(event.value === true) {
      if(h3Elem.length > 0) h3Elem[0].classList.add(this.images[index].mainText.animation);
        h2Elem[0].classList.add(this.images[index].secondText.animation);
        pElem[0].classList.add(this.images[index].thirdText.animation);
        event.target.classList.add('active')
    }
    else {
      if(h3Elem.length > 0) h3Elem[0].classList.remove(this.images[index].mainText.animation);
        h2Elem[0].classList.remove(this.images[index].secondText.animation);
        pElem[0].classList.remove(this.images[index].thirdText.animation);
        event.target.classList.remove('active')
    }
  }

  public inViewHandler(event):void {
    this.navIsOnTop = event.value;
  }

  private getImages(): Subscription {
    return this.apiService.getTechs().subscribe((tech) => {
      this.images = tech as Tech[];
    });
  }
}
