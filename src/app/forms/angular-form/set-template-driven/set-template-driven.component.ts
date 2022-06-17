import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-set-template-driven',
  templateUrl: './set-template-driven.component.html',
  styleUrls: ['./set-template-driven.component.scss']
})
export class SetTemplateDrivenComponent implements OnInit {

  constructor() { }
  contacts! : Contact

  ngOnInit(): void {
   this.setDafault();
  }

  countries = [
    { value :'1' , name :'India'},
    {value :'2' , name :'USA'},
    {value :'3' , name :'England'},
  ]

  changeCountry(){
    this.contacts.country = '1'
  }

  setDafault(){
    this.contacts={
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: false,
      country: "2",
      address: { city: "Mumbai", street: "Perry Cross Rd", pincode: "400050" }
  }
  }

  resetForm(conatctForm:any){
    conatctForm.resetForm();
  }

}


export class Contact{
  firstname!: string;
  lastname!: string;
  email!: string;
  gender!: string;
  isMarried!: boolean;
  country!: string;
  address!: {
    city: string;
    street: string;
    pincode: string;
  }

}