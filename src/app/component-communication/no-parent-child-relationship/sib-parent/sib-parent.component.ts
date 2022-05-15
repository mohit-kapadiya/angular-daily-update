import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sib-parent',
  templateUrl: './sib-parent.component.html',
  styleUrls: ['./sib-parent.component.scss']
})
export class SibParentComponent implements OnInit {

  constructor() { }

  name : any

  ngOnInit(): void {
    this.name ="Angular"
  }


  eventClick(sib1Name:any){
    this.name = sib1Name
  }

}
