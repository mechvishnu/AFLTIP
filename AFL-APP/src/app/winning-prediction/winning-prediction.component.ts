import { Component, OnInit } from '@angular/core';
import { GamedataService } from 'src/app/gamedata.service';
import { map, filter, scan } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TipsDataService } from 'src/app/tips-data.service';


@Component({
  selector: 'app-winning-prediction',
  templateUrl: './winning-prediction.component.html',
  styleUrls: ['./winning-prediction.component.css']
})
export class WinningPredictionComponent implements OnInit {

  fav : string;
  games : any = [];
  tips : any = [];
  filterobj : any = [];
  futureGameDate: any = [];
  count : number = 0;
  conf : number = 0;
  value: any;

  setFavTeam(val){
    this.fav = val;
    this.ngOnInit();
  }

  constructor(private gameService : GamedataService, private tipsService : TipsDataService, private http : HttpClient) { }

  ngOnInit() {
    this.gameService.getgames().subscribe( response =>
      {
        var filterCount : number = 0;

        for (var i=0; i < response['games'].length ; i++)
        {
          this.games[i] = response['games'][i];
      
          if (this.games[i].ateam === this.fav || this.games[i].hteam === this.fav && this.games[i].complete === 0)
          {
            this.filterobj[filterCount] = this.games[i];
            this.futureGameDate[filterCount] = this.filterobj[filterCount].date;
            filterCount++;
          }
        }
        //console.log(this.games);
        
        //console.log(this.filterobj);
        //this.futureGameDate = this.filterobj[0].date;
        //console.log(this.futureGameDate);
        this.tipsService.gettips().subscribe(
          response =>
          {
            for (var i=0; i < response['tips'].length ; i++)
            {
              this.tips[i] = response['tips'][i];

              for (var j = 0; j < filterCount; j++)
{              if (this.tips[i].date === this.futureGameDate[j])
              {
                console.log(this.tips[i].confidence)
 
                console.log(this.conf += parseFloat(this.tips[i].hconfidence));
                this.count++;

              }
              }
            }
          
            console.log('exits if');
            this.value = ((this.conf/(this.count+1)).toFixed( 2 ));      
            console.log(this.value);
          }
        )
      })
  }

  // getProbability() {
  //   this.value = ((this.conf/(this.count+1)).toFixed( 2 ) ); 
  // }
}
