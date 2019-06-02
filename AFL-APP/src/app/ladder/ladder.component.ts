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
  ladderdata1 :any[] = [];

  numericArray: any[] = [2, 3, 4, 1, 5, 8, 11];
  sortedArray: any[] = [];


  constructor(private route:ActivatedRoute, private ladderService : LadderService) {

  }

  ngOnInit() {
    // for(var i=0 ; i < response['ladder'].length ; i++)
    // {
    //   this.sortedArray= this.ladderdata.sort((n1[i]['rank'],n2[i]['rank']) => n1[i]['rank'] - n2[i]['rank']);
    //   console.log(this.sortedArray[i]);
    // }


    this.sortedArray = this.numericArray.sort((n1,n2) => n1 - n2);
    // console.log(this.sortedArray);

    this.ladderService.getLadder().subscribe(response => {
      for (var i=0 ; i < response['ladder'].length ; i++)
      {
        if (response['ladder'][i]['sourceid'] ==1)
        {
         this.ladderdata[i] = response['ladder'][i];
         //console.log(this.ladderdata[i]['rank']);
        }
      }
    })



        //console.log(this.sortedArray[i]);


  }

}
