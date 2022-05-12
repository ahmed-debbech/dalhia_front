import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ForgetPasswordService } from 'app/forget-password/forget-password.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private route : ActivatedRoute , private forgetPassword : ForgetPasswordService) { }
  isChecked=false;
  token : string;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params)
      this.token=params.token;
    })
  }

  onSubmit(forgetForm : NgForm) {
    const password = forgetForm.value.password;
    console.log(password)
    console.log(this.token)
    this.forgetPassword.changePassword(password,this.token).subscribe(()=> {
      console.log(this.token)
      this.isChecked = true
    })
  }
}
