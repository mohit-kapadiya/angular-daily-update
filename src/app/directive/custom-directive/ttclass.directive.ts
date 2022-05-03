import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTtclass]'
})
export class TtclassDirective implements OnInit {

  constructor(
    private el : ElementRef
  ) { }

  @Input() ttClass! : String

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = "red"
  }



}
