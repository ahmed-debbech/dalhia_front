import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CertificateService } from 'app/services/certificate-service';

@Component({
  selector: 'certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {

  listCertificates : any[]=[];
  constructor(private cs:CertificateService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.cs.getAllCertificates(this.route.snapshot.paramMap.get('id')).subscribe(res=>{this.listCertificates=res; console.log(this.listCertificates);});
    console.log (this.route.snapshot.paramMap.get('id'))
  }

}
