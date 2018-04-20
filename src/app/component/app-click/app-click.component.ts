import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './app-click.component.html',
  styleUrls: ['./app-click.component.css']
})
export class AppClickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickButton($event) {
    console.log($event);
  }

}
