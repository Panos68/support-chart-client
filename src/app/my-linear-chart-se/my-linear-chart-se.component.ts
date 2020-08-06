import { EmailStatsService } from './../email-stats.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-linear-chart-se",
  templateUrl: "./my-linear-chart-se.component.html",
  styleUrls: ["./my-linear-chart-se.component.css"],
})
export class MyLinearChartSeComponent implements OnInit {
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
      fill:"false"
    },
  ];

  constructor(private emailStatsService: EmailStatsService) {}

  ngOnInit(): void {
    this.emailStatsService.getYearlyEmails().subscribe((res: any) => {
      let comEmails = this.emailStatsService.filterEmailsByType(res, "SE");
      this.emailStatsService.initializeGraphs(this.linearChartData, comEmails);
    });
  }
}
