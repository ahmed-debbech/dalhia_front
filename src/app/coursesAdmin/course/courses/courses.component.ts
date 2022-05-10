import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'app/models/Course';
import { CoursesService } from 'app/services/courses.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

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
    /*this.cs.deleteCourse(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));*/
        this.cs.deleteCourse(id).subscribe(res => {
          console.log("deleted!");
          this.reloadData()
        })
  }
  
  courseDetails(id: number){
    this.router.navigate(['/detailscourse/', id]);
    //this.cs.getCourse(this.course.id).subscribe(res => {this.course = res; console.log(this.course)})
  } 

  updateCourse(id: number){
    this.router.navigate(['updatecourse', id]);
  }
}
