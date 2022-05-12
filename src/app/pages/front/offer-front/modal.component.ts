import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { ApplicationService } from 'app/services/application/application.service';
import { SnotifyService,SnotifyPosition } from 'ng-snotify';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header" >
      <h4 class="modal-title">Offer Details</h4>
     
      <span  class="badge badge-primary" style="float:right;" ></span>
     
      <p>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <h5>Informations</h5>
      Title :{{data.title}} <br>
      Category : {{data.jobCategory.nom}} <br>
      Job Type :{{data.jobType}}<br>
      Adress :{{data.address}} <br>
      Email : {{data.email}} <br>
      Experience   : {{data.level}} years     <br>    <br>
      Starting Date: {{data.startDate | date: 'dd/MM/yyyy'}} <br>
      Description Offer:{{data.description}}  <br>
      
      <label for="InputTitle">Email</label>
                            <input type="text" class="form-control" id="Email" placeholder="Enter your Email" #email>
      
    <div class="modal-footer">
    <button   type="button" class="btn btn-outline-primary" (click)='postulerOffer(email.value,data)'>Postuler</button>
    <button type="button" class="btn btn-outline-dark" >Close</button>

      </div>
  `
})
export class NgbdModalContent implements OnInit {
  name = 'ng-snotify';
  @Input() data;
  fromDate: any;
  datePipe: DatePipe = new DatePipe('');
  constructor(public activeModal: NgbActiveModal,private applicationService : ApplicationService,public service: SnotifyService) { }
  ngOnInit() { }

  postulerOffer(email,offer){
    const application = {
      email:email,
      title: offer.title
    }
    this.applicationService.addApplication(application,offer.id,2).subscribe(res=>{
      console.log("application",res);
      this.activeModal.close('Cross click');
      this.openToast(offer.title,email);
    })
  }
  openToast(title,email) {
    this.service.success(title, 'application sent',
     {
      timeout: 2000,
      showProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true
    });
  }
  openHTML() {
    this.service.html(
      `<div>
        <h1>List</h1>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>See</li>
        </ul>
      </div>`, {
        position: SnotifyPosition.centerBottom,
        backdrop: 0.7,
        showProgressBar: false
      }
    )
  }

  openPrompt() {
    this.service.confirm('Example body content', 'Example title', {
      timeout: 2000,
      showProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      buttons: [
        { 
          text: 'Yes', 
          action: () => {
            console.log('Clicked: Yes');
            //this.openToast();
          }, 
          bold: false 
        },
        { 
          text: 'No', 
          action: () => {
          console.log('Clicked: No')
          } 
        },
        { 
          text: 'Later', 
          action: (toast) => { 
            console.log('Clicked: Later'); this.service.remove(toast.id); 
          } 
        },
        { 
          text: 'Close', 
          action: (toast) => { 
            console.log('Clicked: No'); this.service.remove(toast.id); 
          }, 
          bold: true },
      ]
    });
  }
}
