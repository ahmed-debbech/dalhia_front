import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'app/models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor( private http:HttpClient) { }

  baseUrl = "http://localhost:8089/api/v1/course/course";

  getAllCourses(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+ "/coursesList");
  }

  getCourse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
    //return this.http.get<Course>(this.baseUrl+ "/" + id);
  }


  addCourse(course: Course, idcat : number): Observable<Course> {
    //return this.http.post(`${this.baseUrl}` + "/addcourses" , course);
    return this.http.post<Course>(this.baseUrl+ "/" + idcat + "/add" , course);
  }

  updateCourse(cors : Course): Observable<Course> {
    return this.http.put<Course>(this.baseUrl + "/" + cors.id , cors);
  }

  deleteCourse(id: number) : Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id)
  }
  
}
