import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Tech} from "../models/tech";
import {Color} from "../models/color";
import {Brand} from "../models/brand";
import {Qbox} from "../models/qbox";
import {Accordion} from "../models/accordion";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  public getTechs(): Observable<Tech[]> {
    return this.http.get<Tech[]>(API_URL + '/api/techs', {responseType: 'json'}).map(response => {
      return response.map((tech) => new Tech(tech.id, tech.link, tech.mainText, tech.secondText, tech.thirdText));
    }).catch(this.handleError);
  }

  public getColors(): Observable<Color[]>  {
    return this.http.get<Color[]>(API_URL + '/api/colors', {responseType: 'json'}).map(response => {
      return response.map((color) => new Color(color.id, color.name, color.conditions, color.imageSrc, color.animation));
    }).catch(this.handleError);
  }

  public getBrands(): Observable<Brand[]>  {
    return this.http.get<Brand[]>(API_URL + '/api/brands', {responseType: 'json'}).map(response => {
      return response.map((brand) => new Brand(brand.id, brand.name, brand.src));
    }).catch(this.handleError);
  }

  public getQboxes(): Observable<Qbox[]>  {
    return this.http.get<Qbox[]>(API_URL + '/api/qboxes', {responseType: 'json'}).map(response => {
      return response.map((qbox) => new Qbox(qbox.id, qbox.header, qbox.text, qbox.author, qbox.post, qbox.rating));
    }).catch(this.handleError);
  }

  public getAccordion(): Observable<Accordion[]>  {
    return this.http.get<Accordion[]>(API_URL + '/api/accordion', {responseType: 'json'}).map(response => {
      return response.map((accordion) => new Accordion(accordion.id, accordion.header, accordion.text));
    }).catch(this.handleError);
  }

  private handleError (err: HttpErrorResponse): Observable<any>  {
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }
    return Observable.empty<any>();
  }

}
