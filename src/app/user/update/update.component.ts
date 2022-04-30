import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  updateForm : FormGroup
  user : User;
  constructor(private service : UserService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getById(id).subscribe(u =>{ this.user=u;
    this.updateForm = new FormGroup({
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
    })});
  }

  onUpdate() {
    this.updateForm.setValue({
      'email' : this.user.email,
      'first_name' : this.user.first_name,
      'last_name' : this.user.last_name,
      'phone' : this.user.phone,
      'date_birth' : this.user.date_birth,
      'city' : this.user.city,
      'state' : this.user.state,
      'zipCode' : this.user.zipCode,
      'address' : this.user.address
    })
  }

  onSubmit() {

  }
}
