import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[EventsDirective]'
})

export class EventsDirective {

  constructor(private element: ElementRef, private renderer: Renderer){}

  @HostListener('mouseenter') onMouseEnter() {
    this.brandEvent('#FF8800', false);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.brandEvent(null, false);
  }

  @HostListener('click') onClick() {
    this.brandEvent('#FF8800', true);
  }

  brandEvent(color: string, underline: boolean) {
    this.renderer.setElementStyle(this.element.nativeElement, 'color', color);
    if(underline){
      this.renderer.setElementStyle(this.element.nativeElement, 'textDecoration', 'underline');
    } else {
      this.renderer.setElementStyle(this.element.nativeElement, 'textDecoration', '');
    }
  }

}
