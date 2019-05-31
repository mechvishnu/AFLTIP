import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamedataService {
  url = 'https://api.squiggle.com.au/?q=games&year=2019'
  constructor(private http: HttpClient) { }

  getgames(){
    return this.http.get(this.url);
}

}
