import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'app/models/user';
import { UserService } from './user.service';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

users :User[];
user : User 
signupForm : FormGroup
disabled=true;

authRequest: any = {
  "email" : "boughattasaziz@gmail.csom",
  "password" : "123"
}

  constructor(private service :UserService  ) { }

  ngOnInit(): void {
    //this.getAccessToken(this.authRequest)
    this.service.getUserss().subscribe(user => this.users=user);
    this.signupForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required , Validators.email]),
      'first_name' : new FormControl(null, [Validators.required]),
      'last_name' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required , Validators.minLength(8)]),
      'phone' : new FormControl(null, [Validators.required ,Validators.maxLength(8),Validators.minLength(8)]),
      'date_birth' : new FormControl(null, [Validators.required]),
      'city' : new FormControl(null, [Validators.required]),
      'state' : new FormControl(null, [Validators.required]),
      'zipCode' : new FormControl(null, [Validators.required,Validators.maxLength(4)]),
      'address' : new FormControl(null, [Validators.required]),
    })
  }


  onSubmit() {
    this.service.addUser(this.signupForm.value).subscribe();
    this.signupForm.reset();
  }

  onDelete(id:string) {
    this.service.deleteUser(id).subscribe();
  }

  onUpdate(id : string) {
    this.disabled=false;
    this.service.getById(id).subscribe(u =>{ this.user=u
      
      this.signupForm=new FormGroup({
        'email' : new FormControl(this.user?.email, [Validators.required , Validators.email]),
        'first_name' : new FormControl(this.user?.first_name, [Validators.required]),
        'last_name' : new FormControl(this.user?.last_name, [Validators.required]),
        'password' : new FormControl(null, [Validators.required , Validators.minLength(8)]),
        
        'phone' : new FormControl(this.user?.phone, [Validators.required ,Validators.maxLength(8),Validators.minLength(8)]),
        'date_birth' : new FormControl(this.user?.date_birth, [Validators.required]),
        'city' : new FormControl(this.user?.city, [Validators.required]),
        'state' : new FormControl(this.user?.state, [Validators.required]),
        'zipCode' : new FormControl(this.user?.zipCode, [Validators.required,Validators.maxLength(4)]),
        'address' : new FormControl(this.user?.address, [Validators.required]),
      })})
  }

  // getAccessToken(authRequest) {
  //   let resp = this.service.generateToken(authRequest);
  //   resp.subscribe(
  //     (data : HttpResponse<any>) => {
  //       console.log(data.headers.get('Authorization'))
  //     }
  //   )
  // }
}
