import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from 'app/models/plans';
import { Subscriptions } from 'app/models/subscription';
import { PlansService } from 'app/plans/plans.service';
import { SubscriptionsService } from 'app/subscriptions/subscriptions.service';


@Component({
  selector: 'subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  constructor(private planService : PlansService, private subscriptionService : SubscriptionsService,private router : Router) { }
 plans : Plans[]
 sub : Subscriptions
 error = null 
 date = new Date()
  ngOnInit(): void {
    this.planService.getPlans().subscribe((data)=> {
      this.plans = data;
    }, error => {
      this.error = "An unknown error happened"
    })
  }
  onSubmit(title : string , id : string) {
    const userData : {
      email : string,
      id:string,
      role:string,
      _token:string,
      _tokenExpirationDate:string;
  }=  JSON.parse(localStorage.getItem('userData'))
    if (title === "1 month") {
      const sub = new Subscriptions(new Date(this.date.getTime()+86400000),new Date(this.date.getTime()+ 86400000*30),userData.id,id)
      this.subscriptionService.addSubscription(sub).subscribe(()=>{
        this.router.navigate(['/home'])
        
      }, error => {
        this.error = error.error.message
        console.log(this.error)
      })
    } else if (title === "3 months") {
      const sub = new Subscriptions(new Date(this.date.getTime()+86400000),new Date(this.date.getTime()+ 86400000*90),userData.id,id)
      this.subscriptionService.addSubscription(sub).subscribe(()=>{
        this.router.navigate(['/home'])
      }, error => {
        this.error = error.error.message
        console.log(this.error)
      })
    } else if (title === "6 months") {
      const sub = new Subscriptions(new Date(this.date.getTime()+86400000),new Date(this.date.getTime()+ 86400000*180),userData.id,id)
      this.subscriptionService.addSubscription(sub).subscribe(()=>{
        this.router.navigate(['/home'])
      }, error => {
        this.error = error.error.message
        console.log(this.error)
      })
    } else if (title === "1 year") {
      const sub = new Subscriptions(new Date(this.date.getTime()+86400000),new Date(this.date.getTime()+ 86400000*365),userData.id,id)
      this.subscriptionService.addSubscription(sub).subscribe(()=>{
        this.router.navigate(['/home'])
      }, error => {
        this.error = error.error.message
        console.log(this.error)
      })
    }
  }

  onHandleError(){
    this.error = null
  }
}
