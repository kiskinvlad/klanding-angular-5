import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle-content',
  templateUrl: './middle-content.component.html',
  styleUrls: ['./middle-content.component.scss']
})
export class MiddleContentComponent implements OnInit {
  images: Array<any>;
  brands: Array<any>;
  color: String;

  constructor() { }

  ngOnInit() {
    this.images = [
      {id: 0, name: 'Red', conditions: ['red', 'hot'], imageSrc: "../../assets/red-background.jpg", animation: 'fadeIn'},
      {id: 1, name: 'Blue', conditions: ['blue', 'cold'], imageSrc: "../../assets/blue-background.jpg", animation: 'fadeIn'},
      {id: 3, name: 'Beach', conditions: ['hot'], imageSrc: "../../assets/beach-background.jpg", animation: 'fadeIn'},
      {id: 4, name: 'Cold', conditions: ['cold'], imageSrc: "../../assets/cold-background.jpg", animation: 'fadeIn'}
    ];
    this.brands = [
      {id: 0, name: 'intel', src: '../../assets/intel-logo.png'},
      {id: 1, name: 'amd', src: '../../assets/amd-logo.png'},
      {id: 2, name: 'radeon', src: '../../assets/nvidia-logo.png'},
      {id: 3, name: 'nvidia', src: '../../assets/radeon-logo.png'},
      {id: 4, name: 'seagate', src: '../../assets/k-ico.png'},
      {id: 5, name: 'intel', src: '../../assets/intel-logo.png'},
      {id: 6, name: 'amd', src: '../../assets/amd-logo.png'},
      {id: 7, name: 'radeon', src: '../../assets/nvidia-logo.png'},
      {id: 8, name: 'nvidia', src: '../../assets/radeon-logo.png'},
      {id: 9, name: 'seagate', src: '../../assets/k-ico.png'}
    ]

    this.color = '';
  }

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 1,  "autoplay": true};

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }

}
