import { Component, OnInit } from '@angular/core';
import { TeamdataService } from '../teamdata.service';

@Component({
  selector: 'app-team',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams : any =[];
  constructor(private tDataService:TeamdataService) {

  }

  ngOnInit() {
    this.tDataService.getTeam().subscribe(response => {
      for (var i=0 ; i < response['teams'].length ; i++)
      {
        this.teams[i] = response['teams'][i];
      }
    })
  }

}
