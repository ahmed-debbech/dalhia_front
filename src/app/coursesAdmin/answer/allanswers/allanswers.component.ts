import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'app/models/Answer';
import { AnswerService } from 'app/services/answer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'allanswers',
  templateUrl: './allanswers.component.html',
  styleUrls: ['./allanswers.component.scss']
})
export class AllanswersComponent implements OnInit {

  answers :  Observable<Answer[]>;
  answer : Answer;
  constructor(private as:AnswerService ,private route :ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.as.getAllAnswers(this.route.snapshot.paramMap.get('idddd')).subscribe(res=>{this.answers=res; console.log(this.answers);});
  }

  deleteAnswer(id : number ) {
        this.as.deleteAnswer(id , Number(this.route.snapshot.paramMap.get('id'))).subscribe(res => {
          console.log("deleted!");
          this.reloadData()
        })
  }
  
  answerDetails(id: number){
    this.router.navigate(['/detailsanswer/', id]);
  } 

  updateAnswer(id: number){
    this.router.navigate(['/updateanswer/', id]);
  }

}
