import { Component, OnInit } from '@angular/core';
import { ForumAd } from 'app/models/ForumAd';
import { ForumAdService } from 'app/services/forum-ad.service';

@Component({
  selector: 'ads-addition',
  templateUrl: './ads-addition.component.html',
  styleUrls: ['./ads-addition.component.scss']
})
export class AdsAdditionComponent implements OnInit {

  constructor(private as : ForumAdService) { }

  ngOnInit(): void {
  }

  publish(title : string, periority : string, enddate : string, expected : string, price : string, img : string, redirect : string){
    var form = new ForumAd();
    form.title = title;
    form.viewChannel = Number(periority);
    form.endDate = new Date(enddate);
    form.expectedViews = Number(expected);
    form.amount = Number(price);
    form.imageUrl = img;
    form.videoUrl = img;
    form.redirectUrl = redirect;
    console.log(form);
    this.as.addNewAd(form).subscribe(res => {console.log(res)});
  }

}
