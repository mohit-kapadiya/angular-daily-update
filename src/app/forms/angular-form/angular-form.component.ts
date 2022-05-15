import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent implements OnInit {

  constructor() { }

  countries = [
    { value :'1' , name :'India'},
    {value :'2' , name :'USA'},
    {value :'3' , name :'England'},
  ]

  model : any = {}

  ngOnInit(): void {
  
  }

  onSubmit(){
    alert("data submit successfully")
  }

}
