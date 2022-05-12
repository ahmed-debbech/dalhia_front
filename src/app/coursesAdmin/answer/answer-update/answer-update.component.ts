import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'app/models/Answer';
import { AnswerService } from 'app/services/answer.service';

@Component({
  selector: 'answer-update',
  templateUrl: './answer-update.component.html',
  styleUrls: ['./answer-update.component.scss']
})
export class AnswerUpdateComponent implements OnInit {

  id: number;
  answer: Answer;
  constructor(private route: ActivatedRoute,private router: Router,
    private as: AnswerService) { }

  ngOnInit() {
    this.answer = new Answer();
    
    this.id = this.route.snapshot.params.get('id');
    
    this.as.getAnswer(this.id)
      .subscribe(data => {
        console.log(data)
        this.answer = data;
      }, error => console.log(error));
  }

  save(proposition : string, correct : string) {
    var answer  = new Answer();
    answer.id = Number(this.route.snapshot.paramMap.get('id'))
    answer.proposition = proposition
    answer.correct = correct
    this.as.updateAnswer(this.answer)
      .subscribe(data => {
        console.log(data);
        this.answer = new Answer();
        this.gotoList();
      }, error => console.log(error));
  }
  

  gotoList() {
    this.router.navigate(['/allanswers']);
  }

}
