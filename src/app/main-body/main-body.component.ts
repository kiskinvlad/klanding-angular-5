import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  images: Array<any>;
  searchBounce: boolean;
  isMobileNavHidden: boolean;
  constructor() { }
  ngOnInit() {
    this.images = [
      {
        link:
        '../../assets/IT-1.jpg',
        mainText: {
          text: 'Web development',
          animation: 'bounceInLeft',
        },
        secondText: {
          text: 'MEAN stack',
          animation: 'bounceInRight',
        },
        thirdText: {
          text: 'This is AngularJs (Angular 2+) plus MongoDB plus Express plus NodeJs plus fun!',
          animation: 'bounceInUp',
        }
    },
      {
        link:'../../assets/IT-2.jpg',
        mainText: {
          text: 'Desktop development',
          animation: 'bounceInLeft',
        },
        secondText: {
          text: 'Create apps with Python',
          animation: 'bounceInDown',
        },
        thirdText: {
          text: "Like Qt? - Try PyQt. Don't like Qt? - Use Kivy.",
          animation: 'bounceInUp',
        }
      },
      {
        link:'../../assets/IT-3.jpg',
        secondText: {
          text: 'Created by Kiskin Vlad',
          animation: 'bounceInDown',
        },
        thirdText: {
          text: 'Using Angular 5, Express and Bootstrap 4',
          animation: 'bounceInUp',
        }
      }
    ];
    this.searchBounce = null;
    this.isMobileNavHidden = false;
  }

  toggleSearchInput(): void {
    this.searchBounce = !this.searchBounce;
  }

  toggleNavigation(): void {
    this.isMobileNavHidden = !this.isMobileNavHidden;
  }

  toggleAnimation(event, index): void {
    let h3Elem = event.target.querySelectorAll('h3');
    let h2Elem = event.target.querySelectorAll('h2');
    let pElem = event.target.querySelectorAll('p');
    if(event.value === true) {
      if(h3Elem.length > 0)
        h3Elem[0].classList.add(this.images[index].mainText.animation);
      h2Elem[0].classList.add(this.images[index].secondText.animation);
      pElem[0].classList.add(this.images[index].thirdText.animation);
      event.target.classList.add('active')
    } else {
        if(h3Elem.length > 0)
          h3Elem[0].classList.remove(this.images[index].mainText.animation);
        h2Elem[0].classList.remove(this.images[index].secondText.animation);
        pElem[0].classList.remove(this.images[index].thirdText.animation);
        event.target.classList.remove('active')
    }
  }
}
