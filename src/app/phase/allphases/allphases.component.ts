import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'app/models/Phase';
import { PhaseService } from 'app/services/phase.service';
import { QuestionService } from 'app/services/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'allphases',
  templateUrl: './allphases.component.html',
  styleUrls: ['./allphases.component.scss']
})
export class AllphasesComponent implements OnInit {

  phases :  Phase[];
  phase : Phase;
  constructor(private ps:PhaseService ,private route :ActivatedRoute,private router:Router , private qs:QuestionService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.ps.getAllPhases(this.route.snapshot.paramMap.get('idd')).subscribe(res=>{this.phases=res; console.log(this.phases);});
  }

  deletePhase(id : number ) {
        this.ps.deletePhase(Number(this.route.snapshot.paramMap.get('id')) , id).subscribe(res => {
          console.log("deleted!");
          this.reloadData()
        })
  }
  
  phaseDetails(id: number){
    this.router.navigate(['/detailsphase/', id]);
  }

  redirectQuestions(id:number){
    this.router.navigateByUrl('courses/'+ Number(this.route.snapshot.paramMap.get('id'))+'/detailscourse/'+ Number(this.route.snapshot.paramMap.get('idd'))+'/allphases/'+ id + '/allquestions')
  }

  redirectResources(id:number){
    this.router.navigateByUrl('courses/'+ Number(this.route.snapshot.paramMap.get('id'))+'/detailscourse/'+ Number(this.route.snapshot.paramMap.get('idd'))+'/allphases/'+ id + '/allresources')
  }

  redirectContent(id:number){
    this.ps.getPhase(id).subscribe(res=>{this.phase = res;
      if(this.phase.title=="QUIZ"){
        this.redirectQuestions(id);
      } else{
        this.redirectResources(id);
      }
    });
    
  }

  updatePhase(id: number){
    this.router.navigate(['/updatephase/', id]);
  }

}
