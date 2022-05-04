import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, share, shareReplay } from 'rxjs';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent implements OnInit {

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.getAsyncPipe();
  }

  obsValue : any

/* 
  We use the shareReplay when you want subscribers to share the observable and access previously emitted values. 
  i.e. the observable is subscribed only once and for every subsequent subscription, 
  the previously received value is used. 
  
*/

  getAsyncPipe(){
    this.obsValue = new Observable((observer)=>{
      setTimeout(()=>{
        console.log("observable starts")
        observer.next("9000")
      } , 1000)
    }).pipe(shareReplay())
  }

  hounds : Observable<any> = this.getHoundList();

  getHoundList(){
    return this.http.get<any>("https://jsonplaceholder.typicode.com/albums");
  }
  
}
