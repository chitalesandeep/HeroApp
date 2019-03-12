import { Directive, ElementRef, HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appHighlightMe]'
})
export class HighlightMeDirective {

  @Input('appHighlightMe') highlightColor: string;

  constructor(private el:ElementRef) {

 //   console.log(this.highlightColor);

      this.HighlightDefault('red');
   }

  @HostListener('click') onclick()
  {
    this.el.nativeElement.style.color = this.highlightColor;
  }

  /* @HostListener('mouseenter') onmouseenter()
  {
    this.HighlightDefault('yellow');
  } */
  @HostListener('mouseleave') onmouseleave()
  {
    //this.HighlightDefault('');
  }

   private HighlightDefault(color:string) 
  {
      this.el.nativeElement.style.color = color;
  }

}
