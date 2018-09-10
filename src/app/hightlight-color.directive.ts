import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHightlightColor]'
})
export class HightlightColorDirective {

  defaultColor:string= "#fff";
  constructor(private el : ElementRef) { }
 @Input('appHightlightColor') highlightColor:string;
 @HostBinding('style.background-color') backColor:string;
 @HostBinding('style.color') color:string;
 @HostListener('mouseenter') onmouseenter(){
   this.highlight(this.highlightColor);
 }

 @HostListener('mouseleave') onmouseleave(){
  this.highlight(this.defaultColor);
}


 highlight(color){
   console.log(this.el.nativeElement.style);
  this.backColor = color;
  this.color = 'pink';
 }
}
