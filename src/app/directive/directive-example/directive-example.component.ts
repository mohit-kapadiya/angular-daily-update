import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss']
})
export class DirectiveExampleComponent implements OnInit {

  constructor() { 
    this.collection = [{id: 1}, {id: 2}, {id: 3}];
  }

  ngOnInit(): void {
  }

  countNumber =  2;
  mTitle = '';
  mDirector ='';
  collection : any


  customerData = [
    { name :'mohit' , city :'jetpur'},
    { name :'uday' , city :'amreli'},
    { name :'aaditya' , city :'banglore'},
  ]

  items: any = [
    {name: 'One', val: 1}, 
    {name: 'Two', val: 2}, 
    {name: 'Three', val: 3}];  

  selectedValue: string= 'One'; 

  getItems() {
    this.collection = this.getItemsFromServer();
  }
  
  getItemsFromServer() {
    return [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  }

  trackByFn(index : any, item:any) {
    return index; // or item.id
  }

  

  
}
 

