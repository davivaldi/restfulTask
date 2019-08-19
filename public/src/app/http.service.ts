import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
    //  this.getTasks();
   
   }
   getTasks(){
   // our http response is an Observable, store it in a variable
  //     let tempObservable = this._http.get('/api/tasks');
  //  // subscribe to the Observable and provide the code we would like to do with our data from the response
  //     tempObservable.subscribe(data => console.log("Got our tasks!", data));
  return this._http.get('/api/tasks')
   }

   getTask(){
     let obserable = this._http.get('/api/task/:id');
      obserable.subscribe(data => console.log("This one tTask is: ", data));
   }

   updateOne(){
     let obserable = this._http.get('api/task/:id');
      obserable.subscribe(data => console.log("this is where we update a task", data));
   }
   deleteOne(){
     let obserable = this._http.get('api/task/:id');
        obserable.subscribe(data => console.log("this is where you delete", data));
   }
  }