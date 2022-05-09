import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscriptions } from 'app/models/subscription';
import * as moment from 'moment';
import { SubscriptionsService } from './subscriptions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private subscriptionService : SubscriptionsService) { 
    this.checkDate = {}
  }
  idToModify : string
   checkDate =null;
  subscriptions : Subscriptions[]
  subscription : Subscriptions
  error = null 
  check = false;
  isFetching = true;
  subForm : FormGroup
  disabled=true;
editMode = false;
sub : Subscription
  ngOnInit(): void {
    this.subscriptionService.getSubscriptions().subscribe((data)=> {
      this.subscriptions = data
      this.isFetching=false
      console.log(this.subscriptions)
    } , error => {
      this.isFetching=false
        console.log(error)
      this.error = error.message;
    })

    this.subForm = new FormGroup({
      'date_debut' : new FormControl(null , [Validators.required,this.dateValidator]),
      'date_fin' : new FormControl(null , [Validators.required,this.dateValidator]),
      'userId' : new FormControl(null , Validators.required),
      'planId' : new FormControl(null , [Validators.required ,Validators.pattern(/^[1-9]+[0-9]*$/)])
    })
  }

  onSubmit() {
    this.check=true
    if (this.editMode){
      this.subscriptionService.updateSubscription(this.idToModify,this.subForm.value).subscribe(() => {
        this.check= false;
        window.location.reload();
      } , error => {
        this.error = error.error.message;
      });
      this.subForm.reset();
    } else {
      this.subscriptionService.addSubscription(this.subForm.value).subscribe(() => {
        this.check =false;
        console.log(this.subForm.value)
        window.location.reload();
      }, error => {
       this.error= error.error.message
     });
      this.subForm.reset();
      
       }
  }

  unsubscribe() {
    this.editMode=false;
    this.disabled=true
    this.ngOnInit();
  }

  dateValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      console.log(control.value);
      const date = moment(control.value);
      const today = moment();
      if (date.isBefore(today)&&(date.isValid)) {
        return { 'invalidDate': true }
      }
      
    }
    
    return null;
  }

  dateValidator2(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      console.log(control.value);
      const date = moment(control.value);
      const today = moment();
      if (date.isBefore(this.checkDate)&&(date.isValid)) {
        return { 'invalidDate': true }
      }
    }
    return null;
  }

  onUpdate(id : string) {
    this.editMode=true
    this.idToModify = id
    console.log(this.editMode)
    this.disabled=false;
    this.sub = this.subscriptionService.getById(id).subscribe((data)=> {
      this.subscription = data
      console.log(this.subscription)
      this.subForm = new FormGroup({
        'date_debut' : new FormControl(this.subscription.date_debut , [Validators.required,this.dateValidator]),
        'date_fin' : new FormControl(this.subscription.date_fin , [Validators.required,this.dateValidator])
        
      })
      
    })
}
onDelete(id : string){
  this.check=true
  this.subscriptionService.deleteSubscription(id).subscribe(()=> {
    this.check=false;
  }, error => {
    this.error = error.message
  });
}
onHandleError(){
  this.error = null
}

}
