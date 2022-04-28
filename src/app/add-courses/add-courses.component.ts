import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'app/models/Course';

@Component({
  selector: 'add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.scss']
})
export class AddCoursesComponent implements OnInit {

  course : Course;
  list : Course[];
  constructor() { }

  ngOnInit(): void {
    this.course = new Course();
    this.list =[];
    console.log(this.list);
  }

  submit({value, valid} : {value: Course , valid: boolean}){
    this.list.push(this.course);
    console.log("after the click");
    console.log(this.list);
  }

}
