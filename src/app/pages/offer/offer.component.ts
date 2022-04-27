import { Component, OnInit } from '@angular/core';
import { Offer } from 'app/model/offer';
import { OfferService } from 'app/services/offer/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  offers:any= [];
  constructor(private offerService : OfferService) {
    this.getOffers();
   }

  getOffers() {
    this.offerService.getOffers().subscribe(res=>{
      this.offers=res;
      console.log(this.offers);
    })
  }

  ngOnInit(): void {
  }

}
