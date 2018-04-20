import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorred]'
})
export class ColorredDirective {

  constructor(private ElementRef: ElementRef) { }

  ngOnInit() {
    const element = this.ElementRef.nativeElement as HTMLElement;
    element.style.color = '#f00';
  }
}
