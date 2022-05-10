import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'app/models/Question';
import { QuestionService } from 'app/services/question.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'allquestions',
  templateUrl: './allquestions.component.html',
  styleUrls: ['./allquestions.component.scss']
})
export class AllquestionsComponent implements OnInit {

  questions :  Observable<Question[]>;
  question : Question;
  constructor(private qs:QuestionService ,private route :ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.qs.getAllQuestions(Number(this.route.snapshot.paramMap.get('iddd'))).subscribe(res=>{this.questions=res; console.log(this.questions);});
  }

  redirectAnswers(id:number){
    this.router.navigateByUrl('courses/'+ Number(this.route.snapshot.paramMap.get('id'))+'/detailscourse/'+ Number(this.route.snapshot.paramMap.get('idd'))+'/allphases/'+  Number(this.route.snapshot.paramMap.get('iddd')) + '/allquestions/'+ id + '/allanswers')
  }

  deleteQuestion(id : number ) {
        this.qs.deleteQuestion(id).subscribe(res => {
          console.log("deleted!");
          this.reloadData()
        })
  }
  
  questionDetails(id: number){
    this.router.navigate(['/detailsquestion/', id]);
  } 

  updateQuestion(id: number){
    this.router.navigate(['/updatequestion/', id]);
  }
}


