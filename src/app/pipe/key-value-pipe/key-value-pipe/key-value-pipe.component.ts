import { DatePipe, KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-value-pipe',
  templateUrl: './key-value-pipe.component.html',
  styleUrls: ['./key-value-pipe.component.scss']
})
export class KeyValuePipeComponent implements OnInit {

  constructor(
    private datePipe : DatePipe
  ) { }

  toDate : any

  ngOnInit(): void {
    this.toDate = this.datePipe.transform(new Date() , 'dd/MM/yy HH:mm');
  }

  

  obj = {
    c: 123,
    b: 456,
    a: 789,
  };

  // compareFn


}


/* 
Note :

* Ascending Order if the keys are number
* Alphabetical Order if keys are strings
* if keys are are of different types. then covert them to to their string values and use Alphabetical Order
* If key is a either Null or undefined, put then at the end of the sort. 


we can use the pipe in ts file aslo

* First import the DatePipe from @angular/common. Add it in the Angular Provider metadata providers: [ DatePipe ],.
* Open the app.component.html and inject the DatePipe in the constructor.



*/
