import { Component, OnInit } from '@angular/core';
import { TeamdataService } from '../teamdata.service';
import { GamedataService } from 'src/app/gamedata.service';

@Component({
  selector: 'app-team',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams : any =[];
  gameslist: any[];
  constructor(private tDataService:TeamdataService, private gData:GamedataService) {
  }

  ngOnInit() {

    this.tDataService.getTeam().subscribe(response => {
      for (var i=0 ; i < response['teams'].length ; i++)
      {
        this.teams[i] = response['teams'][i];
        console.log(this.teams[i]['name']);
      }
    })//team data


    // this.gData.getgames().subscribe( response =>
    //    {
    //      console.log(response);
    //      for (var i=0; i < response['games'].length ; i++)
    //     {
    //       //console.log(response['games'][i]);
    //       this.gameslist = response['games'][i];
    //     }
    // })



  }//ngOnIt
}
