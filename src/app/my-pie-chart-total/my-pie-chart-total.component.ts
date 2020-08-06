import { EmailStatsService } from './../email-stats.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-pie-chart-total",
  templateUrl: "./my-pie-chart-total.component.html",
  styleUrls: ["./my-pie-chart-total.component.css"],
})
export class MyPieChartTotalComponent implements OnInit {
  public pieChartLabels = [
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

  public pieChartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  public pieChartType = "pie";

  constructor(private emailStatsService: EmailStatsService) {}

  ngOnInit(): void {
    this.emailStatsService.getTotalEmails().subscribe((res: any) => {
      let comEmails = this.emailStatsService.filterPieEmailsByType(res, "TOTAL");

      this.pieChartData = Object.values(comEmails.emailsSent);
    });
  }
}
