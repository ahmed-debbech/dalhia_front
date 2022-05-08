import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'app/models/Course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor( private http:HttpClient ) { }

  baseUrl = "http://localhost:8089/api/v1/course/course";

  getAllCourses(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`+ "/coursesList");
  }

  getCourse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
    //return this.http.get<Course>(this.baseUrl+ "/" + id);
  }

  addCourse(course: Object): Observable<Object> {
    //return this.http.post(`${this.baseUrl}` + "/addcourses" , course);
    return this.http.post<Course>(this.baseUrl+ "/addcourses" , course);
  }

  updateCourse(id: number, value: any): Observable<Object> {
    //return this.http.put(`${this.baseUrl}/${id}`, value);
    return this.http.put<any>(this.baseUrl + "/" + id , value);
  }

  deleteCourse(id: number) : Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id)
  }
  
}
