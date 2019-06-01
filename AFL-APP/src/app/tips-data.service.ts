import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TipsDataService {

  url = 'https://api.squiggle.com.au/?q=tips;year=2019'
  constructor(private http: HttpClient) { }

  gettips(){
    return this.http.get(this.url);

  }
}
