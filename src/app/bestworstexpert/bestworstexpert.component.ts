import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BestexpertService } from 'app/shared/bestexpert.service';

@Component({
  selector: 'app-bestworstexpert',
  templateUrl: './bestworstexpert.component.html',
  styleUrls: ['./bestworstexpert.component.scss']
})
export class BestworstexpertComponent implements OnInit {

  constructor(public service:BestexpertService, public dialog: MatDialog) { }
  expert:any;
  wexpert:any;
  bscored:any;
  bscore: any;
  wscore:any;
  wscored:any;
  ngOnInit(): void {

    this.service.getBestExpert().subscribe(
      res =>{
        this.expert = res;
      },
      err =>{
        console.log(err);
      }

    );

    this.service.getWorstExpert().subscribe(
      res =>{
        this.wexpert = res;
      },
      err =>{
        console.log(err);
      }

    );


    this.service.getBestScored().subscribe(
      res =>{
        this.bscored = res;
      },
      err =>{
        console.log(err);
      }

    );

    this.service.getWorstScored().subscribe(
      res =>{
        this.wscored = res;
      },
      err =>{
        console.log(err);
      }

    );

    this.service.getBestScore().subscribe(
      res =>{
        this.bscore = res;
      },
      err =>{
        console.log(err);
      }

    );

    this.service.getWorstScore().subscribe(
      res =>{
        this.wscore = res;
      },
      err =>{
        console.log(err);
      }

    );



    }

}
