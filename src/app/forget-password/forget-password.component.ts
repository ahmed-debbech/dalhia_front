import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgetPasswordService } from './forget-password.service';

@Component({
  selector: 'forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

isChecked = false
isLoading=false
  
  constructor(private forgetPassword : ForgetPasswordService , private router : Router) { }

  
  ngOnInit(): void {
   const check = false
  }
  onSubmit(forgetForm : NgForm) {
    const email = forgetForm.value.email
    console.log(email)
 
    if(forgetForm.valid){
      this.isLoading = true
    this.forgetPassword.reqForgetPassword(email).subscribe(() =>{
      console.log(email)
      this.isChecked = true
      this.isLoading = false
    }, error => {
      this.isLoading= false;
    })
  }
  }

}
