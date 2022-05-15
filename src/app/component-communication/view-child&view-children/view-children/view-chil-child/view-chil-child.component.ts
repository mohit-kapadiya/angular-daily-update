import { Component , Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-view-chil-child',
  templateUrl: './view-chil-child.component.html',
  styleUrls: ['./view-chil-child.component.scss']
})
export class ViewChilChildComponent implements AfterViewInit {

  constructor() { }

  @Input() name!: string;
  @ViewChildren(ViewChilChildComponent) childsData!: QueryList<any>;


  ngAfterViewInit(): void {
    this.childsData.forEach(
      data=>{
        console.log(data)
      }
    )
  }

 



}
