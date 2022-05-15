import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewc-child',
  templateUrl: './viewc-child.component.html',
  styleUrls: ['./viewc-child.component.scss']
})
export class ViewcChildComponent implements OnInit {

  constructor() { }

  number = 0;

  ngOnInit(): void {
  }

  increment(){
    this.number++;
  }

  decrement(){
    this.number--
  }



}
