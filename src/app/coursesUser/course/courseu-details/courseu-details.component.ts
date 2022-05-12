import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'app/models/Course';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'course-details',
  templateUrl: './courseu-details.component.html',
  styleUrls: ['./courseu-details.component.scss']
})
export class CourseuDetailsComponent implements OnInit {

  id: number;
  course: Course;

  constructor(private route: ActivatedRoute,private router: Router,
    private cs: CoursesService) { }

  ngOnInit() {
    this.course = new Course();

    this.id = this.route.snapshot.params['id'];
    
    this.cs.getCourse(this.id)
      .subscribe(data => {
        console.log(data)
        this.course = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigateByUrl('user/coursesu');
  }
}
