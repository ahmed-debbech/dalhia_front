import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'app/models/Course';
import { CoursesService } from 'app/services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'add-courses',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class AddCoursesComponent implements OnInit {

  course: Course = new Course();
  courses :  Observable<Course[]>;
  submitted = false;

  constructor(private cs:CoursesService ,private route :ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  reloadData(){
    this.cs.getAllCourses().subscribe(res=>{this.courses=res; console.log(this.courses);});
  }

  save() {
    /*this.cs.addCourse(this.course).subscribe(data => {
      console.log(data)
      this.course = new Course();
      this.reloadData();
    }, 
    error => console.log(error));*/

      var course  = new Course();
      this.cs.addCourse(course).subscribe(res => {console.log(res)})
    }
  

  onSubmit() {
    this.submitted = true;
    this.save();    
  }


  


}
