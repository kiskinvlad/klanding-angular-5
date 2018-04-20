import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";
import {Color} from "../models/color";
import {Brand} from "../models/brand";
import {Qbox} from "../models/qbox";
import {Accordion} from "../models/accordion";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss']
})
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

  constructor(private apiService: ApiService) { }

  ngOnInit() {
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
  }

  slideConfig = {"slidesToShow": 5, "slidesToScroll": 1,  "autoplay": true};
  quoteSlideConfig = {"slidesToShow": 3, "slidesToScroll": 1,  "autoplay": true};

  private getColors(): Subscription {
    return this.apiService.getColors().subscribe((color) => {
      this.colors = color as Color[];
    });
  }

  private getBrands(): Subscription {
    return this.apiService.getBrands().subscribe((brand) => {
      this.brands = brand as Brand[];
    });
  }

  private getQbox(): Subscription {
    return this.apiService.getQboxes().subscribe((box) => {
      this.qBoxes = box as Qbox[];
    });
  }

  private getAccordion(): Subscription {
    return this.apiService.getAccordion().subscribe((accordion) => {
      this.accordionInfo = accordion as Accordion[];
    });
  }

  public getQboxRate(length): Array<number> {
    return Array(length).fill(0).map((x,i)=>i)
  }

  public infoInViewHandler(event): void {
    this.infoInView = event.value;
  }

  public filterInViewHandler(event): void {
    this.filterInView = event.value;
  }

  public advertisingInViewHandler(event): void {
    this.advertisingInView = event.value;
  }

  public quoteInViewHandler(event): void {
    this.quoteInView = event.value;
  }

  public newsLeftInViewHandler(event): void {
    this.newsLeftInView = event.value;
  }

  public newsRightInViewHandler(event): void {
    this.newsRightInView = event.value;
  }

}
