import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sib-child2',
  templateUrl: './sib-child2.component.html',
  styleUrls: ['./sib-child2.component.scss']
})
export class SibChild2Component implements OnInit {

  constructor() { }

  @Input() name : any

  ngOnInit(): void {
  }

}
