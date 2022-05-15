import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-chil-parent',
  templateUrl: './view-chil-parent.component.html',
  styleUrls: ['./view-chil-parent.component.scss']
})
export class ViewChilParentComponent implements OnInit {

  constructor() { }
  name = 'Angular';
 

  ngOnInit(): void {
  }


}
