import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { NavbarService } from '../../../nav-menu/nav-menu.service';
import { GalleryForm } from '../../models/gallery.interface';

@Component({
  selector: 'app-gallery-component',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit  {

  constructor(
    private router: Router,
    //public nav: NavbarService
  ) {}

  onSubmit(value: GalleryForm) {
  }
  ngOnInit() {
  //  this.nav.show();
  }


}
