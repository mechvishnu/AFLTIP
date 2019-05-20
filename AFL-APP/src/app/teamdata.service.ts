import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamdataService {

   url = 'https://api.squiggle.com.au/?q=teams'
  constructor(private http: HttpClient) { 
  }
  
  getTeam(){
      return this.http.get(this.url);
  }

}
