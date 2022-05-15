import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildCounterComponent } from '../child-counter/child-counter.component';

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.scss']
})
export class ParentCounterComponent implements OnInit {

  constructor() { }

  clickCounter=0;

  @ViewChild(ChildCounterComponent) childCounter! : ChildCounterComponent

  ngOnInit(): void {
  }

  counterClick(data:any){
    this.clickCounter = data;
  }

  increment(){
    this.childCounter.increment();
  }

  decrement(){
    this.childCounter.decrement();
  }

}
