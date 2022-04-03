import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel-change',
  templateUrl: './ngmodel-change.component.html',
  styleUrls: ['./ngmodel-change.component.scss']
})
export class NgmodelChangeComponent implements OnInit {

  constructor() { }

  lastName : any

  ngOnInit(): void {
  }

  changeInput(event : any){
    window.alert(event.target.value)
  }

  lastNameChanged(value : any) {
    console.log(
        "lastNameChanged  argument " + value + "  component " + this.lastName
    );
  }

}
