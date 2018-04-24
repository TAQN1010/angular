import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {
  @Input() person: any;
  @Output() selected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  model: boolean = true;

  click(person ): any {
    this.model = !this.model;
    this.selected.emit(person);
  }

}
