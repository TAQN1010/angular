import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './app-class-binding.component.html',
  styleUrls: ['./app-class-binding.component.css']
})
export class AppClassBindingComponent implements OnInit {

  constructor() { }

  isActive = true;

  clickButton($event) {
    this.isActive = !this.isActive;
  }

  ngOnInit() {
    
  }

}
