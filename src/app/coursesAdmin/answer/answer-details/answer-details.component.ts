import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'app/models/Answer';
import { AnswerService } from 'app/services/answer.service';

@Component({
  selector: 'answer-details',
  templateUrl: './answer-details.component.html',
  styleUrls: ['./answer-details.component.scss']
})
export class AnswerDetailsComponent implements OnInit {

  id: number;
  answer: Answer;

  constructor(private route: ActivatedRoute,private router: Router,
    private as: AnswerService) { }

  ngOnInit() {
    this.answer = new Answer();

    this.id = this.route.snapshot.params['iddd'];
    
    this.as.getAnswer(this.id)
      .subscribe(data => {
        console.log(data)
        this.answer = data;
      }, error => console.log(error));
  }

  

  updateAnswer(id: number){
    this.router.navigate(['upc', id]);
  }

  deleteAnswer(id : number) {
        this.as.deleteAnswer(id , Number(this.route.snapshot.paramMap.get("id"))).subscribe(res => {
          console.log("deleted!");
          this.list()
        })
  }

  list(){
    this.router.navigateByUrl('courses/'+this.route.snapshot.paramMap.get("id")+'/detailscourse/'+this.route.snapshot.paramMap.get("idd")+'/allphases/'+this.route.snapshot.paramMap.get("iddd")+'/allquestions/'+this.route.snapshot.paramMap.get("idddd")+'/allanswers');
  }

}
