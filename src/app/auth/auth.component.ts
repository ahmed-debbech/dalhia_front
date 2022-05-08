import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/models/user';


import { AuthService } from './auth.service';


@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user : User = new User()
  isLoading = false;
  error : string = null
  isSignUp=false;
  constructor(private authService : AuthService , private router : Router) { }

  ngOnInit(): void {
  }

  onSubmitL(form : NgForm) {
    const email = form.value.email
    const password = form.value.password
    console.log(email)
    console.log(password)
    this.isLoading=true
    this.authService.login(email , password).subscribe(responseData => {
      console.log(responseData.headers.get('authorization'))
      console.log(responseData.headers.get('userid'))
      console.log(responseData.headers.get('role'))
      
      this.isLoading=false
      this.router.navigate(['/dashboard']);
     
  }, errorMessage => {
    this.error = errorMessage
      this.isLoading=false
  });
    form.reset()
  }

  onSubmitR(form : NgForm) {

    if (!form.valid) { 
      console.log('het')
      return;
    }

 
  
    this.user.email = form.value.email
    this.user.password = form.value.password
    this.user.first_name = form.value.first_name
    this.user.last_name = form.value.last_name
    this.user.phone = form.value.phone
    this.user.city = form.value.city
    this.user.address = form.value.address
    this.user.zipCode = form.value.zipCode
    this.user.date_birth = form.value.date_birth
    this.user.state = form.value.state
    this.isLoading=true
    this.authService.signup(this.user).subscribe(data => {
     console.log(data)
     this.isLoading=false
     this.isSignUp=true
     console.log(this.isSignUp)
    } , errorMessage => {
      console.log(errorMessage)
      this.error = errorMessage
        this.isLoading=false
    });
    form.reset()
  }
}
