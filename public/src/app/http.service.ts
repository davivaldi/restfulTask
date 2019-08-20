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
   createTask(newTask){
     return this._http.post('/api/task',newTask)
   }

   getTask(task:any){
    return this._http.get(`/api/task/${task._id}`);
    
   }

   updateOne(task:any){
     return  this._http.put(`api/task/${task._id}`,task);
    
   }
   deleteOne(task:any){
     return this._http.delete(`api/task/${task._id}`);
    
   }
  }