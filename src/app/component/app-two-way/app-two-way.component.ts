import { Component, OnInit } from '@angular/core';
import { CalcService } from '../../serveice/calc.service';

@Component({
  selector: 'app-two-way',
  templateUrl: './app-two-way.component.html',
  styleUrls: ['./app-two-way.component.css'],
})
export class AppTwoWayComponent implements OnInit {

  constructor(private calcService: CalcService) { }

  model ='two way binding!';
  model1 = 0;
  model2 = 0;
  result: number;

  ngOnInit() {
  }

  clickButton() {
    this.result = this.calcService.add(this.model1, this.model2);
  }
}
