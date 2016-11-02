import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body:  string = 'This is the home page!';
  message: string;
  
  constructor() { }

  ngOnInit() {
  }
}
