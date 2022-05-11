import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phase } from 'app/models/Phase';
import { PhaseService } from 'app/services/phase.service';
import { QuestionService } from 'app/services/question.service';

@Component({
  selector: 'allphasesu',
  templateUrl: './allphasesu.component.html',
  styleUrls: ['./allphasesu.component.scss']
})
export class AllphasesuComponent implements OnInit {

  phases :  Phase[];
  phase : Phase;
  constructor(private ps:PhaseService ,private route :ActivatedRoute,private router:Router , private qs:QuestionService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.ps.getAllPhases(this.route.snapshot.paramMap.get('idd')).subscribe(res=>{this.phases=res; console.log(this.phases);});
  }
  phaseDetails(id: number){
    this.router.navigate(['/detailsphaseu/', id]);
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




}
