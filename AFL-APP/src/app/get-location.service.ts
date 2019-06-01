import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  
  latitude: number;
  longitude: number;
  zoom: number;

  constructor() { }

  getLocation(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      })
    }
  }
}