import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  parentData = "send data parent to child component"
  childData : any

  ngOnInit(): void {
    
  }

  greetEvent(name : any){
    alert(name)
  }


}
