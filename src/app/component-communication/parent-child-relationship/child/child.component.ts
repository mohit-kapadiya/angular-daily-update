import { Component, Input, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() data : any

  @Output()  greetData : EventEmitter<String> = new EventEmitter();

  outputMessage = "I am a child Component"

  ngOnInit(): void {
  }


  greetEvent(){
    this.greetData.emit(this.outputMessage )
  }
 



}
