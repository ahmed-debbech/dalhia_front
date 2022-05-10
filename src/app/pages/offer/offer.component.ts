import { Component, OnInit } from '@angular/core';
import { Offer } from 'app/model/offer';
import { Router } from '@angular/router';
import { OfferService } from 'app/services/offer/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  offers:any= [];
  constructor(private offerService : OfferService, private router : Router) {
    this.getOffers();
   }

  getOffers() {
    this.offerService.getOffers().subscribe(res=>{
      this.offers=res;
      console.log(this.offers);
    })
  }
  OfferDelete(id){
    this.offerService.OfferDelete(id).subscribe(res=>{
      this.offers=res;
      this.getOffers();
    })
  }
  OfferUpdate(id){
    console.log(id);
    this.router.navigate(['offer/offerUpdate', { id: id }]);
  }

  ngOnInit(): void {
  }

}
