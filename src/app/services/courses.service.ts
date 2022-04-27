import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'app/models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor( private _http:HttpClient ) { }

  baseUrl = "http://localhost:8089/api/v1/course/course";

  getAllCourses(): Observable<any>{
    return this._http.get<any>(this.baseUrl+ "/coursesList");
  }
}
