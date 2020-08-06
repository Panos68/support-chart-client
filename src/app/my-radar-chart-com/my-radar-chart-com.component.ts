import { EmailStatsService } from './../email-stats.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-radar-chart-com",
  templateUrl: "./my-radar-chart-com.component.html",
  styleUrls: ["./my-radar-chart-com.component.css"],
})
export class MyRadarChartComComponent implements OnInit {
  public radarChartLabels = [
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

  public radarChartType = "radar";

  public radarChartData = [
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
      this.emailStatsService.initializeGraphs(this.radarChartData, comEmails);
    });
  }
}
