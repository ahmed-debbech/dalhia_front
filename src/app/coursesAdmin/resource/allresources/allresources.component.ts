import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from 'app/models/Resource';
import { ResourceService } from 'app/services/resource.service';

@Component({
  selector: 'allresources',
  templateUrl: './allresources.component.html',
  styleUrls: ['./allresources.component.scss']
})
export class AllresourcesComponent implements OnInit {

  resources :  Resource[];
  resource : Resource;
  constructor(private rs:ResourceService ,private route :ActivatedRoute,private router:Router ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.rs.getAllResources(Number(this.route.snapshot.paramMap.get('idd'))).subscribe(res=>{this.resources=res; console.log(this.resources);});
  }

  deleteResource(id : number ) {
        this.rs.deleteResource(id).subscribe(res => {
          console.log("deleted!");
          this.reloadData()
        })
  }
  
  resourceDetails(id: number){
    this.router.navigate(['/detailsresource/', id]);
  }

  updateResource(id: number){
    this.router.navigate(['/updateresource/', id]);
  }

}
