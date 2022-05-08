import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'phase-update',
  templateUrl: './phase-update.component.html',
  styleUrls: ['./phase-update.component.scss']
})
export class PhaseUpdateComponent implements OnInit {

  constructor(private route : ActivatedRoute ) { }

  ngOnInit(): void {
  }

  

}
