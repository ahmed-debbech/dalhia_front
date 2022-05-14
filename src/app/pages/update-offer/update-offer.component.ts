import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Offer } from 'app/model/offer';
import { CategoryService } from 'app/services/category/category.service';
import { OfferService } from 'app/services/offer/offer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.scss']
})
export class UpdateOfferComponent implements OnInit {

  jobType = ["FullTime", "Temporary", "Internship", "FreeLance", "PartTime", "Others"];
  selectedValue: string = this.jobType[0];
  ChangingValue(event) { console.log(event.target.value); }
  titles: any = "";
  cat: any;
  description: string = "";
  Country: string = "";
  email: string = "";
  id: any;
  StartDate: any;
  EndDate: any;
  model: NgbDateStruct;
  offer: Offer = { title: "", description: "", address: "", email: "", level: 0, startDate: new Date(), endDate: new Date(), jobType: "", jobCategory: { id: 0, name: "" } };



  categorys: any = [];
  constructor(private categoryService: CategoryService, private offerService: OfferService, private router: Router, private route: ActivatedRoute) {



  }
  getCategoryOffer(id) {
    this.categoryService.getCategoryById(id).subscribe(res => {
      console.log(this.cat = res);
    })
  }
  updateOffer(title, description, Country, email, StartDate, EndDate, selectedValue, Category, level) {
    this.getCategoryOffer(Category);
    const offer = {
      id: this.id,

      title: title,
      description: description,
      address: Country,
      email: email,
      startDate: new Date(StartDate),
      endDate: new Date(EndDate),
      jobType: selectedValue,
      jobCategory: {
        id: Category,
        nom: this.cat.name
      },

      level: level
    }


    this.offerService.updateOffer(offer).subscribe(res => {
      this.router.navigate(['offer']);
    })
  }
  getCategory() {
    this.categoryService.getCategory().subscribe(res => {
      this.categorys = res;
    })
  }
  ngOnInit(): void {
    this.getCategory();
    const offerId = this.route.snapshot.paramMap.get('id');
    this.id = offerId;
    
    this.offerService.getOfferById(offerId).subscribe(res => {

      this.offer = new Offer(res.title,
        res.description,
        res.address,
        res.email,
        res.level,
        res.startDate,
        res.endDate,
        res.jobType,
        res.jobCategory);
        this.cat={id: res.jobCategory.id,name:res.jobCategory.name};

    });
    
  }

}
