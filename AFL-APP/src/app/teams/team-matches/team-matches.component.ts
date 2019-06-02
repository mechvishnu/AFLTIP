import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GamedataService } from 'src/app/gamedata.service';
import { TeamdataService } from 'src/app/teamdata.service';
import { TeamsComponent } from '../teams.component';

@Component({
  selector: 'app-team-matches',
  templateUrl: './team-matches.component.html',
  styleUrls: ['./team-matches.component.css']
})
export class TeamMatchesComponent implements OnInit {teamId:number;
  teamName:String;
  games :any = [];
  teamsM :any = [];
  completed = true;
  buttonColor ="btn btn-success";
  but = "testing";

  buttonName = "Upcoming Games";
  constructor(private route :ActivatedRoute, private gameService : GamedataService ,
    private teamServiceM:TeamdataService ) { }


    ngOnInit() {
      this.teamId= this.route.snapshot.params['id'];
      this.teamName = this.route.snapshot.params['name'];



      this.gameService.getgames().subscribe( response =>
        {
          for (var i=0; i < response['games'].length ; i++)
          {
            this.games[i] = response['games'][i];
            //console.log(this.games[i]);
          }
        })


        this.teamServiceM.getTeam().subscribe(response => {
          for (var i=0 ; i < response['teams'].length ; i++)
          {
            this.teamsM[i] = response['teams'][i];
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

      selectTeam(deviceValue)
      {
        this.teamName = deviceValue;
        //this.router.navigate(['../../win']);
      }
    }
