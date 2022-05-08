import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'app/models/Phase';
import { PhaseService } from 'app/services/phase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'allphases',
  templateUrl: './allphases.component.html',
  styleUrls: ['./allphases.component.scss']
})
export class AllphasesComponent implements OnInit {

  phases :  Phase[];
  phase : Phase;
  constructor(private ps:PhaseService ,private route :ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.ps.getAllPhases(this.route.snapshot.paramMap.get('idd')).subscribe(res=>{this.phases=res; console.log(this.phases);});
  }


  deletePhase(id : number) {
        this.ps.deletePhase(id).subscribe(res => {
          console.log("deleted!");
          this.reloadData()
        })
  }
  
  phaseDetails(id: number){
    this.router.navigate(['/detailsphase/', id]);
    //this.cs.getCourse(this.course.id).subscribe(res => {this.course = res; console.log(this.course)})
  } 

  updatePhase(id: number){
    this.router.navigate(['updatephase', id]);
  }

}
