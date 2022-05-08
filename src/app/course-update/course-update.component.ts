import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'app/models/Course';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'course-update',
  templateUrl: './course-update.component.html',
  styleUrls: ['./course-update.component.scss']
})
export class CourseUpdateComponent implements OnInit {

  id: number;
  course: Course;
  constructor(private route: ActivatedRoute,private router: Router,
    private cs: CoursesService) { }

  ngOnInit() {
    this.course = new Course();
    
    this.id = this.route.snapshot.params.get('id');
    
    this.cs.getCourse(this.id)
      .subscribe(data => {
        console.log(data)
        this.course = data;
      }, error => console.log(error));
  }

  updateCourse() {
    this.cs.updateCourse(this.id, this.course)
      .subscribe(data => {
        console.log(data);
        this.course = new Course();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCourse();    
  }

  gotoList() {
    this.router.navigate(['/courses']);
  }

}
