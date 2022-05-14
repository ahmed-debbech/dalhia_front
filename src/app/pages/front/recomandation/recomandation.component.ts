import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OfferService } from 'app/services/offer/offer.service';
import {NgbdModalContent} from '../offer-front/modal.component';
import {translateModalContent} from '../offer-front/translateModal';

@Component({
  selector: 'app-recomandation',
  templateUrl: './recomandation.component.html',
  styleUrls: ['./recomandation.component.scss']
})
export class RecomandationComponent implements OnInit {
  translateText:any="";
    recomandation:any=[];
  constructor(private offerService : OfferService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getRecomandationByIdUser();
  }
  getRecomandationByIdUser(){
    const idUser = 2;
      this.offerService.getRecomandationByIdUser(idUser).subscribe(res=>{
        this.recomandation=res;
        console.log(this.recomandation);
      })
    
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
