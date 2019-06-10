import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-about-us-conatiner',
  templateUrl: './about-us.container.html',
  styleUrls: ['./about-us.container.css']
})
// tslint:disable-next-line:component-class-suffix
export class AboutUsContainer  implements OnInit {
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
  }

}
