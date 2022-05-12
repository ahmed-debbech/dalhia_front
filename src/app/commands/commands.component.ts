import { Component, OnInit } from '@angular/core';
import { CommandsAdmin } from 'app/models/commands-admin';
import { CommandsService } from './commands.service';

@Component({
  selector: 'commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss']
})
export class CommandsComponent implements OnInit {

  constructor(private commandsService : CommandsService) { }

  error=null
  isFetching = true;
  commands : CommandsAdmin[]
  ngOnInit(): void {
    this.commandsService.getCommands().subscribe((data)=> {
      console.log(data)
      this.commands = data
      this.isFetching=false
    } , error => {
      this.isFetching=false
        console.log(error)
      this.error = error.message;
    })
  }

}
