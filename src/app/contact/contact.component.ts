import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'Contact Page';
  body:  string = 'This is the contact page!';
  message: string;
  
  constructor() { }

  ngOnInit() {
  }
}
