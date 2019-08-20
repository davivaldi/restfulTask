import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";
  tasks = [];
  task: any;
  newTask: any;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();
    this.newTask = {
      title: "Learn Angular Forms",
      description: "Two way binding is awesome!"
    };
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("got our Tasks", data);
      this.tasks = data["tasks"];
    });
  }

  onButtonClick(): void {
    console.log(`Click get all event is working`);

    let obserable = this._httpService.getTasks();
    obserable.subscribe((data: []) => (this.tasks = data));
  }

  showDesc(task: object): void {
    console.log(`Click show event is working`);
    this.task = task;
  }
  editTask(task: object): void {
    console.log(`Click editevent is working`);
    this.task = task;
  }
  deleteTask(task: object): void {
    console.log(`Click event delete is working`);
    this._httpService.deleteOne(task).subscribe(data => console.log(data));
  }

  onSubmit() {
    let observable = this._httpService.createTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from the form", data);
      this.newTask = { title: "", description: "" };
    });
  }
  onSubmitEdit(task:any) {
    let observable = this._httpService.updateOne(this.task);
    observable.subscribe(data => {
      console.log("Got data from the form", data);
      this.task = { title: "", description: "" };
    });
  }
}
