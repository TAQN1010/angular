import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propatiy-binding',
  templateUrl: './app-propatiy-binding.component.html',
  styleUrls: ['./app-propatiy-binding.component.css']
})
export class AppPropatiyBindingComponent implements OnInit {

  constructor() { }

  isDisabled = true;

  ngOnInit() {
  }
  
  clickButton($event) {
    console.log($event);
  }
}
