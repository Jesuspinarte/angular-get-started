import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[Brand]'
})

export class BrandDirective {

  constructor(element: ElementRef, renderer: Renderer){
    renderer.setElementStyle(element.nativeElement, 'color', '#FF8800');
    renderer.setElementStyle(element.nativeElement, 'textDecoration', 'underline');
  }

}
