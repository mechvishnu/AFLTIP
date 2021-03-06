import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GamedataService } from 'src/app/gamedata.service';
import { TeamdataService } from 'src/app/teamdata.service';
import { TeamsComponent } from '../teams.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
   teamId:number;
   teamName:String;
   games :any = [];
   teams :any = [];
   completed = true;
   buttonColor ="btn btn-success";
   but = "testing";
   buttonName = "Upcoming Games";
  constructor(private route :ActivatedRoute, private gameService : GamedataService ,
    private teamService:TeamdataService ) { }


  ngOnInit() {
    this.teamId= this.route.snapshot.params['id'];
    this.teamName = this.route.snapshot.params['name'];
    this.gameService.getgames().subscribe( response =>
       {
      for (var i=0; i < response['games'].length ; i++)
      {
        this.games[i] = response['games'][i];
      }
    })
  }

  getLogo(tn:String)
  {
    if (tn =="Western Bulldogs")
    {
      return 'https://squiggle.com.au/wp-content/themes/squiggle/assets/images/Bulldogs.jpg';
    }
    if (tn == "Brisbane Lions")
    {
      return 'https://squiggle.com.au/wp-content/themes/squiggle/assets/images/Brisbane.jpg';
    }
    if (tn == "Greater Western Sydney")
    {
      return 'https://squiggle.com.au/wp-content/themes/squiggle/assets/images/Giants.png';
    }
    else
    {
    return 'https://squiggle.com.au/wp-content/themes/squiggle/assets/images/'+tn.split(" ").join("")+'.jpg';
    }
  }

  upcomingMatch()
  {
    if (this.buttonName== "Upcoming Games")
    {
    this.completed =false;
    this.buttonName='Completed Games';
    this.buttonColor = "btn btn-primary"
    }
    else{
      this.completed = true;
      this.buttonName = "Upcoming Games";
      this.buttonColor = "btn btn-success";
    }
  }
}
