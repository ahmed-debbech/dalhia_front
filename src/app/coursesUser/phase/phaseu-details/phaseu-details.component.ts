import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'app/models/Phase';
import { Resource } from 'app/models/Resource';
import { PhaseService } from 'app/services/phase.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'phaseu-details',
  templateUrl: './phaseu-details.component.html',
  styleUrls: ['./phaseu-details.component.scss']
})
export class PhaseuDetailsComponent implements OnInit {


  id: number;
  phase: Phase;
  resContent : Resource = null
  safeURL : any;
  constructor(private _sanitizer: DomSanitizer, private route: ActivatedRoute,private router: Router,
    private ps: PhaseService) {
 }

  ngOnInit() {
    this.phase = new Phase();
    this.resContent = null;
    this.id = this.route.snapshot.params['iddd'];
    
    this.ps.getPhase(this.id)
      .subscribe(data => {
        console.log(data)
        this.phase = data;
        
      }, error => console.log(error));

    
  }
  load(res : Resource){
    this.resContent = res;
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.resContent.link);
  }
  list(){
    this.router.navigateByUrl('coursesu/'+this.route.snapshot.paramMap.get("id")+'/detailscourseu/'+this.route.snapshot.paramMap.get("idd")+'/allphasesu');
  }


}
