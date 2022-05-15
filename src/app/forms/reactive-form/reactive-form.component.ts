import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  countries = [
    { value :'1' , name :'India'},
    {value :'2' , name :'USA'},
    {value :'3' , name :'England'},
  ]

  userform! : FormGroup;
  pwdPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}";

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm(){
    this.userform = new FormGroup({
      firstName : new FormControl('' , [Validators.required , Validators.minLength(3)]),
      lastName : new FormControl('' , [Validators.required , Validators.minLength(3)]),
      email : new FormControl('' , [Validators.required , Validators.email]),
      gender : new FormControl('male'),
      married : new FormControl(false),
      country : new FormControl('' , [Validators.required]),
      password :new FormControl('' , [Validators.required,Validators.pattern(this.pwdPattern)]),
    })
  }

  get f(){
    return this.userform.controls;
  }

  submit(){
    this.userform.markAllAsTouched();
    if(this.userform.invalid){
      return;
    }
  }

}
