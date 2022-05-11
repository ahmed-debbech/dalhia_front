import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'app/models/Course';
import { CoursesService } from 'app/services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'courses',
  templateUrl: './coursesu.component.html',
  styleUrls: ['./coursesu.component.scss']
})
export class CoursesuComponent implements OnInit {

  courses :  Observable<Course[]>;
  course : Course;
  constructor(private cs:CoursesService ,private route :ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.cs.getAllCourses().subscribe(res=>{this.courses=res; console.log(this.courses);});
  }

  deleteCourse(id : number) {
        this.cs.deleteCourse(id).subscribe(res => {
          console.log("deleted!");
          this.reloadData()
        })
  }
  
  courseDetails(id: number){
    this.router.navigate(['/detailscourseu/', id]);
    //this.cs.getCourse(this.course.id).subscribe(res => {this.course = res; console.log(this.course)})
  } 

  updateCourse(id: number){
    this.router.navigate(['updatecourseu', id]);
  }

}
