import { Component, OnInit } from '@angular/core';
import { LadderService } from '../ladder.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})
export class LadderComponent implements OnInit {
  ladderdata :any[18]=[];
  ladderdata1 = this.ladderdata.sort((a,b) => {a.rank > b.rank ? 1:-1});
  

  constructor(private route:ActivatedRoute, private ladderService : LadderService) { 

  }

  ngOnInit() {

    this.ladderService.getLadder().subscribe(response => {
      for (var i=0 ; i < response['ladder'].length ; i++)
      {
        if (response['ladder'][i]['sourceid'] ==1)
        {
         this.ladderdata[i] = response['ladder'][i];
        }
      }
    })
    

  }

}
