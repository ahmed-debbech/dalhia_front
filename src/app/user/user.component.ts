import { HttpResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'app/models/user';
import { saveAs } from 'file-saver';
import * as moment from 'moment';
import { Subject, Subscription } from 'rxjs';
import { UserService } from './user.service';



@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit    {

users :User[];
user : User ;
isFetching = true;
error = null 
check = false;




signupForm : FormGroup
disabled=true;
editMode = false;
birthDate : any
subscription : Subscription;



  constructor(private service :UserService  ) { }


  ngOnInit(): void {
    
    this.service.getUsers().subscribe(user => {
      this.users=user
      this.isFetching=false
      } , error => {
        this.isFetching=false
        console.log(error)
        this.error =  error.message
      }
    );
   
    this.signupForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required , Validators.email]),
      'first_name' : new FormControl(null, [Validators.required]),
      'last_name' : new FormControl(null, [Validators.required]),
      'password' : new FormControl(null, [Validators.required , Validators.minLength(8)]),
      'phone' : new FormControl(null, [Validators.required ,Validators.pattern("^[0-9]{8}$")]),
      'date_birth' : new FormControl(null, [Validators.required,this.dateValidator]),
      'city' : new FormControl(null, [Validators.required]),
      'state' : new FormControl(null, [Validators.required]),
      'zipCode' : new FormControl(null, [Validators.required,Validators.maxLength(4)]),
      'address' : new FormControl(null, [Validators.required]),
      'userId' : new FormControl(null),
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
      console.log(this.signupForm.value)
      this.service.updateUser(this.user.userId,this.signupForm.value).subscribe(() => {
        this.check= false;
      } , error => {
        this.error.next(error.message)
      });
      this.signupForm.reset();
    }else {
   this.service.addUser(this.signupForm.value).subscribe(() => {
     this.check =false;
   }, error => {
    this.error.next(error.message)
  });
   this.signupForm.reset();
    }
  }

  onDelete(id:string) {
    this.check=true
    this.service.deleteUser(id).subscribe(()=> {
      this.check=false;
    }, error => {
      this.error = error.message
    });
  }

  onUpdate(id : string) {
    this.editMode=true
    this.disabled=false;
   this.subscription= this.service.getById(id).subscribe(u =>{ this.user=u
      this.signupForm=new FormGroup({
        'email' : new FormControl(this.user?.email, [Validators.required , Validators.email]),
        'first_name' : new FormControl(this.user?.first_name, [Validators.required]),
        'last_name' : new FormControl(this.user?.last_name, [Validators.required]),
        
        'phone' : new FormControl(this.user?.phone, [Validators.required ,Validators.pattern("^[0-9]{8}$")]),
        'date_birth' : new FormControl(this.user?.date_birth , [Validators.required,this.dateValidator]),
        'city' : new FormControl(this.user?.city, [Validators.required]),
        'state' : new FormControl(this.user?.state, [Validators.required]),
        'zipCode' : new FormControl(this.user?.zipCode, [Validators.required,Validators.maxLength(4)]),
        'address' : new FormControl(this.user?.address, [Validators.required]),
      })})
     
  }


  dateValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value) {
      console.log(control.value);
      const date = moment(control.value);
      const today = moment();
      if (date.isAfter(today)&&(date.isValid)) {
        return { 'invalidDate': true }
      }
    }
    return null;
  }

  onHandleError(){
    this.error = null
  }

  getUsersPDF() {
    
    
    this.service.getUsersPdf().subscribe((response : any) => {
      let blob:any = new Blob([response], { type: 'application/pdf; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			window.open(url);
			saveAs(blob, 'user.pdf');
			}), (error: any) => console.log('Error downloading the file'),
			() => console.info('File downloaded successfully');
	}
  

}

