import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainHeadComponent } from './main-head/main-head.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainComponent } from './main/main.component';
import {LanguageService} from './services/language.service';
import { MainBodyComponent } from './main-body/main-body.component';
import {UICarouselModule} from 'ui-carousel';
import { InViewportModule } from 'ng-in-viewport';
import 'intersection-observer';
import { MiddleContentComponent } from './middle-content/middle-content.component';
import { ImageFilterPipe } from './pipes/image-filter.pipe';
import { SlickModule } from 'ngx-slick';
import { PanelComponent } from './panel/panel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';

/***
 * Boostrapper module
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHeadComponent,
    MainComponent,
    MainBodyComponent,
    MiddleContentComponent,
    ImageFilterPipe,
    PanelComponent,
    AccordionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    UICarouselModule,
    InViewportModule.forRoot(),
    SlickModule.forRoot(),
    HttpClientModule,
  ],
  providers: [LanguageService, ApiService],
  bootstrap: [AppComponent]
})
/**
 * Application main model
 * @class AppModule
 */
export class AppModule { }
