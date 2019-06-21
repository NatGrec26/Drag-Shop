import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyInformation } from '../../models/company-information.interface';
import { InfoService } from '../services/info.service';




@Component({
  selector: 'app-about-us-conatiner',
  templateUrl: './about-us.container.html',
  styleUrls: ['./about-us.container.css']
})
// tslint:disable-next-line:component-class-suffix
export class AboutUsContainer  implements OnInit {
  historyData: CompanyInformation;
  misionData: CompanyInformation;
  visionData: CompanyInformation;
  constructor(
    private router: Router, private infoService: InfoService
  ) {}

  ngOnInit() {
    this.loadHistory();
    this.loadMision();
    this.loadVision();
  }


  
  
 
 
  loadHistory() {
    this.infoService
      .getInfo(1)
      .subscribe(
        data => (this.historyData = data)
      );
  }

  loadMision() {
    this.infoService
      .getInfo(2)
      .subscribe(
        data => (this.misionData = data)
      );
  }

  loadVision() {
    this.infoService
      .getInfo(3)
      .subscribe(
        data => (this.visionData = data)
      );
  }

}