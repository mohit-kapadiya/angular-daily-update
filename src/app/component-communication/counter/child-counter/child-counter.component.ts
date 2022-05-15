import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.scss']
})
export class ChildCounterComponent implements OnInit {

  constructor() { }


  @Input() count! : any
  @Output() countChanged : EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
  }


  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }




}
