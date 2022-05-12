import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plans } from 'app/models/plans';
import { Subscription } from 'rxjs';
import { PlansService } from './plans.service';

@Component({
  selector: 'plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {


  plans :Plans[];
  plan : Plans;
  error = null 
  check = false;
  isFetching = true;
  planForm : FormGroup
  disabled=true;
editMode = false;
subscription : Subscription
  constructor(private plansService : PlansService) { }

  ngOnInit(): void {
    this.plansService.getPlans().subscribe(data => {
      this.plans = data
      this.isFetching=false
      console.log(data)
    } , error => {
      this.isFetching=false
        console.log(error)
      this.error = error.message;
    })

    this.planForm = new FormGroup({
      'photo' : new FormControl(null , Validators.required),
      'title' : new FormControl(null , Validators.required),
      'price' : new FormControl(null , [Validators.required ,Validators.pattern(/^[1-9]+[0-9]*$/)])
    })
  }

  unsubscribe() {
    this.editMode=false;
    this.disabled=true
    this.ngOnInit();
  }

  onSubmit() {
    this.check=true
    if (this.editMode){
      this.plansService.updateUser(this.plan.id,this.planForm.value).subscribe(() => {
        this.check= false;
      } , error => {
        this.error.next(error.message)
      });
      this.planForm.reset();
    } else {
      this.plansService.addPlan(this.planForm.value).subscribe(() => {
        this.check =false;
      }, error => {
       this.error.next(error.message)
     });
      this.planForm.reset();
       }
  }

  onUpdate(id : number) {
    this.editMode=true
    this.disabled=false;
    this.subscription= this.plansService.getPlanById(id).subscribe((data)=> {
      
      this.plan=data
      console.log(this.plan.id)
        this.planForm = new FormGroup({
        'photo' : new FormControl(this.plan.photo , Validators.required),
        'title' : new FormControl(this.plan.title , Validators.required),
        'price' : new FormControl(this.plan.price , [Validators.required ,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    })
  }

  onDelete(id : number){
    this.check=true
    this.plansService.deletePlan(id).subscribe(()=> {
      this.check=false;
    }, error => {
      this.error = error.message
    });
  }

  onHandleError(){
    this.error = null
  }
}
