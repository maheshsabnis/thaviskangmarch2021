import { Directive, Input, HostListener, ElementRef, Renderer2 } from "@angular/core";

// since the custo attribute ditrective is used as
// proeprty binding, the selector uses the PropertyBInding syntax
// e.g. [setColor]

@Directive({
  selector: '[setColor]'
})
export class ColorDirective {
  // constructor injected object
  // these references will be bresolved using
  // BrowserModule
  constructor(private element:ElementRef, private renderer: Renderer2){
    this.setColor = '';
  }

  // the input decorated property is mapped with selector
  // when value for this property is acepted the directive
  // will use the value for execution
  @Input('setColor')setColor:string;

  // the business logic for the  directive
  private applyColor(color:string):void {
    // rendering the element by changing the style by using the
    // backgroundColor style property
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', color);
  }

  // host events using JavaScript Standard events
  // these events when raised by HTML element then the directive
  // will start executing the logic
  @HostListener('mouseenter')
  onMouseEnter():void{
    this.applyColor(this.setColor || 'magenta');
  }
  @HostListener('mouseleave')
  onMouseLeave():void{
    this.applyColor('');
  }

}
