import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toDate: Date = new Date(); 
  msg: string= 'Welcome to Angular';
  cur : number = 175;
  celcius! : number
  fahrenheit! : number
  

}
