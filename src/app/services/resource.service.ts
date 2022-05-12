import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource } from 'app/models/Resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor( private http:HttpClient) { }

  baseUrl = "http://localhost:8089/api/v1/course/resources";

  getAllResources(id:number): any{
    return this.http.get<any>(`${this.baseUrl}`+"/"+ id + "/resourcesListByPhase");
  }

  getResource(id: number): any{
    return this.http.get(`${this.baseUrl}/${id}`);
  }


  addResource(resource: Resource, idphase : number): Observable<Resource> {
    return this.http.post<Resource>(this.baseUrl+ "/" + idphase + "/add" , resource);
  }

  updateResource(resource : Resource): Observable<Resource> {
    return this.http.put<Resource>(this.baseUrl + "/" + resource.id , resource);
  }

  deleteResource(id: number) : any {
    return this.http.delete<any>(this.baseUrl + "/" + id)
  }
}
