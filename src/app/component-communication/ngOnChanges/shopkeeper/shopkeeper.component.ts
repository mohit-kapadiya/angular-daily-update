import { Component, OnInit } from '@angular/core';
import { CustomerProfile } from '../customer-profile';

@Component({
  selector: 'app-shopkeeper',
  templateUrl: './shopkeeper.component.html',
  styleUrls: ['./shopkeeper.component.scss']
}) 

export class ShopkeeperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message :any
  code = 0;
  name : any
  customer : CustomerProfile = new CustomerProfile();

  updateCustomer(){
  this.customer.name = this.name;
  this.customer.code = this.code;
  }


}
