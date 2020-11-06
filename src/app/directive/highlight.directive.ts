import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bg = 'red';
  // color by default red
  constructor() {}
  @HostListener('mouseenter') mouseenter(): void {
    this.bg = 'yellow';
    // color yellow when mouse is enter
  }
  @HostListener('mouseleave') mouseleave(): void {
    this.bg = 'red';
    // color red mouse outside or back to default
  }
}
