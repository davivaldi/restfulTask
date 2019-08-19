import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";
  tasks = [];
  task : object;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.getTasksFromService();
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("got our Tasks", data);
      this.tasks = data["tasks"];
    });
  }

  onButtonClick(): void {
    console.log(`Click event is working`);

    let obserable = this._httpService.getTasks();
    obserable.subscribe((data: []) => (this.tasks = data));
  }

  showDesc(task: object): void {
    console.log(`Click event is working`);
    this.task = task;
  }



}
