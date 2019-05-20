import { Component, OnInit } from '@angular/core';
import { TeamdataService } from '../teamdata.service';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

   teams : any =[];
  constructor(private tDataService : TeamdataService) { }

  ngOnInit() {
    // this.tDataService.getTeam().subscribe(response => {
    // console.log(response)});
    this.tDataService.getTeam().subscribe(response => {
      // console.log(response['teams'].length)})
      var i=0;
      for (i=0 ; i < response['teams'].length ; i++)
      {
         this.teams[i] = response['teams'][i];
         console.log(this.teams[i]['name']);
      }
    })
    //console.log(this.teams);

    
    
  }

}
