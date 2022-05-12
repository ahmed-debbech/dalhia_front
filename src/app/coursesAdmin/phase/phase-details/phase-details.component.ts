import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'app/models/Phase';
import { PhaseService } from 'app/services/phase.service';

@Component({
  selector: 'phase-details',
  templateUrl: './phase-details.component.html',
  styleUrls: ['./phase-details.component.scss']
})
export class PhaseDetailsComponent implements OnInit {

  id: number;
  phase: Phase;

  constructor(private route: ActivatedRoute,private router: Router,
    private ps: PhaseService) { }

  ngOnInit() {
    this.phase = new Phase();

    this.id = this.route.snapshot.params['iddd'];
    
    this.ps.getPhase(this.id)
      .subscribe(data => {
        console.log(data)
        this.phase = data;
      }, error => console.log(error));
  }

  

  updatePhase(id: number){
    this.router.navigate(['upc', id]);
  }

  deletePhase(id : number) {
        this.ps.deletePhase(Number(this.route.snapshot.paramMap.get("id")),id).subscribe(res => {
          console.log("deleted!");
          this.list()
        })
  }

  list(){
    this.router.navigateByUrl('courses/'+this.route.snapshot.paramMap.get("id")+'/detailscourse/'+this.route.snapshot.paramMap.get("idd")+'/allphases');
  }



}
