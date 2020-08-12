import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderedBox]'
})
export class BorderedBoxDirective {

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border', '1px solid blue');
  }

  @HostListener('click')
  @HostListener('mouseenter')
  public addBorder(): void {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border', '1px solid red');
  }

  @HostListener('mouseleave')
  public removeBorder(): void {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'border' , '');
  }
}
