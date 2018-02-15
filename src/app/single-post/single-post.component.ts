import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

  pageEvent: PageEvent;
  controlType = String;

}
