import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ViewcChildComponent } from '../viewc-child/viewc-child.component';

@Component({
  selector: 'app-viewc-parent',
  templateUrl: './viewc-parent.component.html',
  styleUrls: ['./viewc-parent.component.scss']
})
export class ViewcParentComponent implements OnInit , AfterViewInit{

  constructor() { 
    // this.vchild.decrement();

   /*  return undefined or error bacause 
       The error is due to the fact that we try to use the value, before the ViewChild initializes it.
   */
  
  }
  ngAfterViewInit(): void {
   
    console.log("this method initialization")
  }

  showCounter: boolean = true
  @ViewChild(ViewcChildComponent , {static:true}) vchild! : ViewcChildComponent

/*   

  we can use temp ref variable
  @ViewChild("child" , {static:true}) vchild! : ViewcChildComponent */

  ngOnInit(): void {
    console.log("this is ngoninit")
  }

  IncNumber(){
    this.vchild.increment();
  }

  decNumber(){
    this.vchild.decrement();
  }


  
/* 
  static : true/false
  The value of the static becomes important when the child is rendered dynamically. For Example inside a ngIf or ngSwitch etc

 */




  
}
