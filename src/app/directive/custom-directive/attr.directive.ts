import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective implements OnInit {

  // HostListener listens to host events, while HostBinding allows us to bind to a property of the host element. 
  
  @Input() defaultColor! : String;
  @Input() hightLightColor! : String;


  @HostBinding('style.backgroundColor')
  backGroundColor!: String;
  
  constructor() { 
    this.backGroundColor = this.defaultColor;
  }
  ngOnInit(): void {
    this.backGroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(){
    this.backGroundColor = this.hightLightColor;
  }

  @HostListener('mouseleave') mouseleave(){
    this.backGroundColor = this.defaultColor;
  }

}
