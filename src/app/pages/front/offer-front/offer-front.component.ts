import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from 'app/services/offer/offer.service';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalContent} from './modal.component';
import {translateModalContent} from './translateModal';


@Component({
  selector: 'app-offer-front',
  templateUrl: './offer-front.component.html',
  styleUrls: ['./offer-front.component.scss']
})
export class OfferFrontComponent implements OnInit {
  closeResult:string;
  offers:any= [];
  translateText:any="";
  constructor(private offerService : OfferService, private router : Router,
    private modalService:NgbModal
    ) {
    console.log("test");
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
  searchOffer(text){
    
    if(text.length!=0){
      this.offers=[];
      this.offerService.searchOffer(text,2).subscribe(res=>{
        this.offers=res;
      });
    }
    if(text.length==0){
      this.getOffers();
    }
    
    }
    translateOffer(id){

      this.offerService.translateOffer(id).subscribe(res=>{
        this.translateText=res;
        const modalRef = this.modalService.open(translateModalContent);
        modalRef.componentInstance.data = this.translateText;
        console.log(this.translateText);
      })
    }


   


funct(data) {
  const modalRef = this.modalService.open(NgbdModalContent);
  modalRef.componentInstance.data = data;
  console.log(data);
}



}
