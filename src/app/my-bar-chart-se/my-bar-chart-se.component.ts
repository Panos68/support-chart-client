import { EmailStatsService } from "./../email-stats.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-bar-chart-se",
  templateUrl: "./my-bar-chart-se.component.html",
  styleUrls: ["./my-bar-chart-se.component.css"],
})
export class MyBarChartSeComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  public barChartType = "bar";
  public barChartLegend = true;

  public barChartData = [
    {
      data: [0],
      label: "",
      backgroundColor: this.emailStatsService.getRandomColor(),
    },
  ];

  constructor(private emailStatsService: EmailStatsService) {}

  ngOnInit(): void {
    this.emailStatsService.getYearlyEmails().subscribe((res: any) => {
      let comEmails = this.emailStatsService.filterEmailsByType(res, "SE");
      this.emailStatsService.initializeGraphs(this.barChartData, comEmails);
    });
  }
}
