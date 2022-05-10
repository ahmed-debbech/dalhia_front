import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Offer } from 'app/model/offer';
import { CategoryService } from 'app/services/category/category.service';
import { OfferService } from 'app/services/offer/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {
  jobType =["FullTime","Temporary","Internship","FreeLance","PartTime","Others"];
  selectedValue : string =this.jobType[0];
  ChangingValue(event){console.log(event.target.value);}
  title:string="";
  description:string="";
  Country:string="";
  email:string="";

  StartDate :any ;
  EndDate :any ;
  model: NgbDateStruct;
  offer:Offer= null;

  addOffer(title,description,Country,email,StartDate,EndDate,selectedValue,Category,level){
    this.offer= new Offer(title,description,Country,email,level,StartDate,EndDate,selectedValue,Category);
    this.offerService.addOffer(this.offer).subscribe(res=>{
      
      console.log("okey");
    })
    this.router.navigate(['/offer']);
        }
  
    categorys:any= [];
     constructor(private categoryService : CategoryService,private offerService:OfferService,private router: Router) {
    this.getCategory();
    
   }
   getCategory() {
    this.categoryService.getCategory().subscribe(res=>{
      this.categorys=res;
      console.log(this.categorys);
    })
  }
  ngOnInit(): void {
  }

}
