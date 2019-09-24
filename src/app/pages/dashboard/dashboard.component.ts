import { Component, OnInit, ViewChild } from "@angular/core";
import Chart from 'chart.js';
import {DayPilot, DayPilotSchedulerComponent} from 'daypilot-pro-angular';
import SchedulerPropsAndEvents = DayPilot.SchedulerPropsAndEvents;

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;

  constructor() {}

  @ViewChild('scheduler', {static: false})
  scheduler: DayPilotSchedulerComponent;

  events: any[] = [];

  config: SchedulerPropsAndEvents = {
    timeHeaders: [{"groupBy":"Month"},{"groupBy":"Day","format":"d"}],
    scale: "Day",
    days: 30,
    startDate: "2019-09-01",
    treeEnabled: true,
  };

  ngOnInit() {}
  scheduler_default_corner_inner
}
