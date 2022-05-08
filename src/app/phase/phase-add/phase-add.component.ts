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

  reloadData(){
    this.ps.getAllPhases(this.route.snapshot.paramMap.get('id')).subscribe(res=>{this.phases=res; console.log(this.phases);});
  }

  save() {

      var phase  = new Phase();
      this.ps.addPhase(phase).subscribe(res => {console.log(res)})
    }
  

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

}
