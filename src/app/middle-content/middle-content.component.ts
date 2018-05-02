import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Color} from '../models/color';
import {Brand} from '../models/brand';
import {Qbox} from '../models/qbox';
import {Accordion} from '../models/accordion';
import {Subscription} from 'rxjs/Subscription';

/**
 * The middle-content component
 */
@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss']
})

/**
 * @class MiddleContentComponent
 * @implements OnInit
 */
export class MiddleContentComponent implements OnInit {
  colors: Color[] = [];
  brands: Brand[] = [];
  qBoxes: Qbox[] = [];
  accordionInfo: Accordion[] = [];
  activeColor: String;
  infoInView: boolean;
  filterInView: boolean;
  advertisingInView: boolean;
  quoteInView: boolean;
  newsLeftInView: boolean;
  newsRightInView: boolean;
  slideConfig: any;
  quoteSlideConfig: any;

  /**
   * @constructor
   * @param {ApiService} apiService
   */
  constructor(private apiService: ApiService) { }

  /**
   * Lifecycle hook that is called after data-bound
   * properties of a directive are initialized.
   * Initialize variables, fetch data, set slider config.
   * @returns void
   */
  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    this.getQbox();
    this.getAccordion();

    this.activeColor = '';
    this.infoInView = false;
    this.filterInView = false;
    this.advertisingInView = false;
    this.quoteInView = false;
    this.newsLeftInView = false;
    this.newsRightInView = false;
    this.slideConfig = {'slidesToShow': 5, 'slidesToScroll': 1,  'autoplay': true};
    this.quoteSlideConfig = {'slidesToShow': 3, 'slidesToScroll': 1,  'autoplay': true};
  }

  /**
   * Api method to get colors
   * @returns Subscription
   */
  private getColors(): Subscription {
    return this.apiService.getColors().subscribe((color) => {
      this.colors = color as Color[];
    });
  }

  /**
   * Api method to get brands
   * @returns Subscription
   */
  private getBrands(): Subscription {
    return this.apiService.getBrands().subscribe((brand) => {
      this.brands = brand as Brand[];
    });
  }

  /**
   * Api method to get qBox
   * @returns Subscription
   */
  private getQbox(): Subscription {
    return this.apiService.getQboxes().subscribe((box) => {
      this.qBoxes = box as Qbox[];
    });
  }

  /**
   * Api method to get accordion data
   * @returns Subscription
   */
  private getAccordion(): Subscription {
    return this.apiService.getAccordion().subscribe((accordion) => {
      this.accordionInfo = accordion as Accordion[];
    });
  }

  /**
   * Calculate rating for single qbox
   * @returns Array<number>
   */
  public getQboxRate(length: number): Array<number> {
    return Array(length).fill(0).map((x, i) => i);
  }

  /**
   * Detect if info block in viewport
   * @returns void
   */
  public infoInViewHandler(event: any): void {
    this.infoInView = event.value;
  }

  /**
   * Detect if filter block in viewport
   * @returns void
   */
  public filterInViewHandler(event: any): void {
    this.filterInView = event.value;
  }

  /**
   * Detect if adversting block in viewport
   * @returns void
   */
  public advertisingInViewHandler(event: any): void {
    this.advertisingInView = event.value;
  }

  /**
   * Detect if quote block in viewport
   * @returns void
   */
  public quoteInViewHandler(event: any): void {
    this.quoteInView = event.value;
  }

  /**
   * Detect if news left block in viewport
   * @returns void
   */
  public newsLeftInViewHandler(event: any): void {
    this.newsLeftInView = event.value;
  }

  /**
   * Detect if news right block in viewport
   * @returns void
   */
  public newsRightInViewHandler(event: any): void {
    this.newsRightInView = event.value;
  }

}
