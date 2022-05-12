import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandsAdmin } from 'app/models/commands-admin';
import { CommandsClient } from 'app/models/commands-client';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {

  constructor(private http : HttpClient) { }

  url="http://localhost:8089/api/v1/commands/"

  getCommands() {
    return this.http.get<CommandsAdmin[]>(this.url);
  }
  addCommands(id : string , command : CommandsClient) {
    return this.http.post(this.url+id,command)
  }
}
