import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from 'app/model/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  server="http://localhost:8089/api/v1/JobCategory/";
  constructor(private http: HttpClient) { }

  getCategory() {
    return this.http.get<Category>(this.server+"retrieve-all-JobCategory",{responseType: 'json'});
  }

  getCategoryById(id:string){
    return this.http.get<Category>(this.server+"retrieve-JobCategory/"+id,{responseType: 'json'});
  }
}
