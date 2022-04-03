import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {

  constructor() { }
  
  firstName = "Mohit";
  lastName = "Kapadiya";
  title="Angular Property Binding Example"
  isDisable = true
  flag = true;
  size =30

  ngOnInit(): void {
  }


  clickMe(){
    window.alert("Click Me!")
  }

}
