import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements  OnChanges, OnInit {

  constructor() { }
  changelog: string[] = [];
  @Input() message! : string
  @Input() customer! : any


  ngOnInit(): void {
    console.log("ng on init")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges")
    for(const propname in changes){
      const change = changes[propname];
      const to  = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `${propname}: changed from ${from} to ${to} `;
      this.changelog.push(changeLog);
    }
  }

/* 
  The change detector uses the === strict equality operator for detecting changes to the input properties. 
  For primitive data types like string, the above comparison works perfectly.

  But in the case of an object like a customer, this fails. For Arrays/objects, the strict checking means that only the references are checked. 
  Since the reference to the customer stays the same the Angular does not raise the OnChanges hook.
 */




  

}
