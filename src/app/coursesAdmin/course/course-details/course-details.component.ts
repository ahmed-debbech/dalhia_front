import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'app/models/Course';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

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
    this.router.navigate(['courses']);
  }

  updateCourse(id: number){
    this.router.navigate(['upc', id]);
  }

  deleteCourse(id : number) {
    /*this.cs.deleteCourse(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));*/
        this.cs.deleteCourse(id).subscribe(res => {
          console.log("deleted!");
          this.list()
        })
  }

}
