import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  profileds = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
    { id: 3, name: 'c'},
    { id: 4, name: 'd'},
    { id: 5, name: 'e'},
    { id: 5, name: 'f'},
  ];

  components = [0, 1, 2, 3, 4, 5];

  constructor() {  }
  showAlert(person: any) {
    alert(person.name);
  }
}
