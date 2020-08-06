import { EmailStatsService } from "./../email-stats.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-bar-chart-com",
  templateUrl: "./my-bar-chart-com.component.html",
  styleUrls: ["./my-bar-chart-com.component.css"],
})
export class MyBarChartComComponent implements OnInit {
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
      let comEmails = this.emailStatsService.filterEmailsByType(res, "COM");
      this.emailStatsService.initializeGraphs(this.barChartData, comEmails);
    });
  }
}
