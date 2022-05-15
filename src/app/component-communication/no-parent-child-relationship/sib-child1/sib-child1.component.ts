import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sib-child1',
  templateUrl: './sib-child1.component.html',
  styleUrls: ['./sib-child1.component.scss']
})
export class SibChild1Component implements OnInit {

  constructor() { }

  @Output() event : EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  onEventClick(){
    this.event.emit("Hii I m from ahmedabad");
  }

}
