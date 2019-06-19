import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gallery-video',
  templateUrl: './gallery-video.component.html',
  styleUrls: ['./gallery-video.component.css'],
})
export class GalleryVideoComponent  implements OnInit {

  @Output() submit = new EventEmitter<object>();


  constructor() { }


  ngOnInit() {
  }

  onSubmit() {
  }
}
