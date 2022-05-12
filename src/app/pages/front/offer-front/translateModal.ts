import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { ApplicationService } from 'app/services/application/application.service';
import { SnotifyService,SnotifyPosition } from 'ng-snotify';

@Component({
  selector: 'translate-modal-content',
  template: `
    <div class="modal-header" >
      <h4 class="modal-title">translate Offer : </h4>
      
      <span  class="badge badge-primary" style="float:right;" ></span>
     
      
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <h5>Translation</h5>
      {{data}} <br>
      
      
    <div class="modal-footer">
    
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Cross click')" >Close</button>

      </div>
  `
})
export class translateModalContent implements OnInit {
  name = 'ng-snotify';
  @Input() data;
  fromDate: any;
  datePipe: DatePipe = new DatePipe('');
  constructor(public activeModal: NgbActiveModal,private applicationService : ApplicationService,public service: SnotifyService) { }
  ngOnInit() { }

  
  
}
