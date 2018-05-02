import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Tech} from '../models/tech';
import {Subscription} from 'rxjs/Subscription';
import { InViewportService } from 'ng-in-viewport';

/**
 * The main-body component
 */
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
  providers: [ApiService]
})

/**
 * @class MainBodyComponent
 * @implements OnInit
 */
export class MainBodyComponent implements OnInit {
  images: Tech[] = [];
  searchBounce: boolean;
  isMobileNavHidden: boolean;
  navIsOnTop: boolean;

  /**
   * @constructor
   * @param {apiService} ApiService
   */
  constructor(private apiService: ApiService) { }

  /**
   * Lifecycle hook that is called after data-bound
   * properties of a directive are initialized.
   * Initialize variables, fetch images.
   * @returns void
   */
  ngOnInit(): void {
    this.getImages();
    this.searchBounce = null;
    this.isMobileNavHidden = false;
    this.navIsOnTop = true;
  }

  /**
   * Show search input
   * @returns void
   */
  public toggleSearchInput(): void {
    this.searchBounce = !this.searchBounce;
  }

  /**
   * Show mobile navbar
   * @returns void
   */
  public toggleNavigation(): void {
    this.isMobileNavHidden = !this.isMobileNavHidden;
  }

  /**
   * Add animation for each carousel child item
   * @returns void
   */
  public toggleAnimation(event: any, index: number): void {
    const h3Elem = event.target.querySelectorAll('h3');
    const h2Elem = event.target.querySelectorAll('h2');
    const pElem = event.target.querySelectorAll('p');
    if (event.value === true) {
      if (h3Elem.length > 0) {
        h3Elem[0].classList.add(this.images[index].mainText.animation);
      }
        h2Elem[0].classList.add(this.images[index].secondText.animation);
        pElem[0].classList.add(this.images[index].thirdText.animation);
        event.target.classList.add('active');
    } else {
      if (h3Elem.length > 0) {
       h3Elem[0].classList.remove(this.images[index].mainText.animation);
      }
        h2Elem[0].classList.remove(this.images[index].secondText.animation);
        pElem[0].classList.remove(this.images[index].thirdText.animation);
        event.target.classList.remove('active');
    }
  }

  /**
   * Detect if navbar float to the top
   * @returns void
   */
  public inViewHandler(event: any): void {
    this.navIsOnTop = event.value;
  }

  /**
   * Call api method to get images
   * @returns Subscription
   */
  private getImages(): Subscription {
    return this.apiService.getTechs().subscribe((tech) => {
      this.images = tech as Tech[];
    });
  }
}
