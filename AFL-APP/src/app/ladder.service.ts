import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LadderService {
  url = 'https://api.squiggle.com.au/?q=ladder';

  constructor(private http: HttpClient) { }

  getLadder(){
    return this.http.get(this.url);
  }
}
