import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from 'app/shared/appointment.service';
import { BestexpertService } from 'app/shared/bestexpert.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.scss']
})
export class AssociationComponent implements OnInit {

  constructor(public service:BestexpertService,private router:Router) { }
  associations:any;
  ngOnInit(): void {
    this.service.getAssocs().subscribe(
      res =>{
        this.associations = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

}
