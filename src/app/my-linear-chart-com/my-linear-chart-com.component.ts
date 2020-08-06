import { EmailStatsService } from './../email-stats.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-linear-chart-com",
  templateUrl: "./my-linear-chart-com.component.html",
  styleUrls: ["./my-linear-chart-com.component.css"],
})
export class MyLinearChartComComponent implements OnInit {
  public linearChartLabels = [
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

  public linearChartType = "line";

  public linearChartData = [
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
      this.emailStatsService.initializeGraphs(this.linearChartData, comEmails);
    });
  }
}
