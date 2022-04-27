import { Component, OnInit } from '@angular/core';
import { Course } from 'app/models/Course';
import { CoursesService } from 'app/services/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  listCourses : any[]=[];
  constructor(private cs:CoursesService) { }

  ngOnInit(): void {
    this.cs.getAllCourses().subscribe(res=>{this.listCourses=res; console.log(this.listCourses);});
  }

}
