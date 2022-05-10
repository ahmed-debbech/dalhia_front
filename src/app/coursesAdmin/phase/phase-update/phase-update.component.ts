import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'app/models/Phase';
import { PhaseService } from 'app/services/phase.service';

@Component({
  selector: 'phase-update',
  templateUrl: './phase-update.component.html',
  styleUrls: ['./phase-update.component.scss']
})
export class PhaseUpdateComponent implements OnInit {

  id: number;
  phase: Phase;
  constructor(private route: ActivatedRoute,private router: Router,
    private ps: PhaseService) { }

  ngOnInit() {
    this.phase = new Phase();
    
    this.id = this.route.snapshot.params.get('id');
    
    this.ps.getPhase(this.id)
      .subscribe(data => {
        console.log(data)
        this.phase = data;
      }, error => console.log(error));
  }

  save(title : string, duration : number , number : number) {
    var phase  = new Phase();
    phase.id = Number(this.route.snapshot.paramMap.get('id'))
    phase.title = title
    phase.duration = duration
    phase.number = number
    this.ps.updatePhase(phase)
      .subscribe(data => {
        console.log(data);
        this.phase = new Phase();
        this.gotoList();
      }, error => console.log(error));
  }
  

  gotoList() {
    this.router.navigate(['/allphases']);
  }

}
