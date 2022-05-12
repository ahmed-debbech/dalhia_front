import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'app/models/Phase';
import { PhaseService } from 'app/services/phase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'phase-add',
  templateUrl: './phase-add.component.html',
  styleUrls: ['./phase-add.component.scss']
})
export class PhaseAddComponent implements OnInit {

  phase: Phase = new Phase();
  phases :  Observable<Phase[]>;
  submitted = false;

  constructor(private ps:PhaseService ,private route :ActivatedRoute,private router:Router) { }


  ngOnInit() {
  }

  /*reloadData(){
    this.ps.getAllPhases().subscribe(res=>{this.phases=res; console.log(this.phases);});
  }

  save(title : string, duration : number) {
    var phase  = new Phase();
    phase.title = title
    phase.duration = duration
    this.ps.addPhase(phase, id).subscribe(res => {console.log(res); this.gotoList();})
  }

  gotoList() {
    this.router.navigate(['courses/:id/detailscourse/:idd/allphases']);
  }*/
  save(title : string, duration : number) {}

}
