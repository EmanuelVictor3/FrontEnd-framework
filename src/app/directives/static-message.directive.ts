import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appStaticMessage]',
  standalone: true,
})
export class StaticMessageDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  private AUSounds: string[] = [
    "AU AU AU",
    "AUuuuuuu",
    "AU AU",
    "AU",
    "AU AU AUUUUUUUU",
    "AU AU",
    "Woooooo",
  ];

  ngAfterViewInit() {
    const randomIndex = Math.floor(Math.random() * this.AUSounds.length);
    const randomAUSound = this.AUSounds[randomIndex];

    const messageElement = this.renderer.createText(randomAUSound);
    this.renderer.appendChild(this.el.nativeElement, messageElement);
  }
}
