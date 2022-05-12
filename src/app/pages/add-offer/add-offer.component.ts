import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Offer } from 'app/model/offer';
import { CategoryService } from 'app/services/category/category.service';
import { OfferService } from 'app/services/offer/offer.service';
import { Router } from '@angular/router';
import { Category } from 'app/model/Category';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {
  private readonly notifier: NotifierService;
  jobType =["FullTime","Temporary","Internship","FreeLance","PartTime","Others"];
  selectedValue : string =this.jobType[0];
  ChangingValue(event){console.log(event.target.value);}
  title:string="";
  description:string="";
  Country:string="";
  email:string="";
  isCategory:boolean=false;
  

  StartDate :any ;
  EndDate :any ;
  model: NgbDateStruct;
  offer:Offer= null;
  

  addOffer(title,description,Country,email,StartDate,EndDate,selectedValue,Category,level){
    const newOffer = {
      title: title,
   description: description,
   address: Country,
   email: email,
   startDate: StartDate,
   endDate: EndDate,
   jobType:selectedValue,
   level:level

}
    this.offer= new Offer(title,description,Country,email,level,StartDate,EndDate,selectedValue,Category);
    console.log("okey",this.offer);
    this.offerService.addOffer(newOffer,Category).subscribe(res=>{
      
      this.notifier.show({
        type: 'success',
        message: 'You are awesome! I mean it!',
        id: 'THAT_NOTIFICATION_ID', // Again, this is optional
      });
      this.router.navigate(['/offer']);
    })
    
        }
  
    categorys:any= [];
     constructor(notifierService: NotifierService,private categoryService : CategoryService,private offerService:OfferService,private router: Router) {
      this.notifier = notifierService;
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
  showCategory(){
    if(this.isCategory==true){
      this.isCategory=false;
    }
    else{
      this.isCategory=true;
    }
  }

  addCategory(categoryName){
    const category = {
      nom:categoryName
    }
    this.categoryService.addCategory(category).subscribe(res=> {
      this.getCategory();
      this.isCategory=false;
    })
      
  }

  categoryDelete(id){
    this.categoryService.categoryDelete(id).subscribe(res=> {
      this.getCategory();
    })
  }


  /**
	 * Show a notification
	 *
	 * @param {string} type    Notification type
	 * @param {string} message Notification message
	 */
	public showNotification( type: string, message: string ): void {
		this.notifier.notify( type, message );
	}
}
