import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = 'About Page';
  body:  string = 'This is the about page!';
  message: string;

  constructor() { }

  ngOnInit() {
    
  }
}
