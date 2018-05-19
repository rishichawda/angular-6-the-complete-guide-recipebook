import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  Input,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appHoverIndicator]'
})
export class HoverIndicatorDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundcolor: string;
  @Input('on_hover_bgcolor') default_color: 'initial';
  @Input() hover_color: string;

  constructor(private element_ref: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundcolor = this.default_color;
  }

  @HostListener('mouseenter') mouseenter() {
    this.backgroundcolor = this.hover_color;
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundcolor = this.default_color;
  }
}
