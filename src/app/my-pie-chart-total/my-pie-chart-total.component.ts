import { ConstantsService } from './../common/services/constants.service';
import { EmailStatsService } from './../email-stats.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-pie-chart-total",
  templateUrl: "./my-pie-chart-total.component.html",
  styleUrls: ["./my-pie-chart-total.component.css"],
})
export class MyPieChartTotalComponent implements OnInit {
  public pieChartLabels = [""];

  public pieChartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  public pieChartType = "pie";

  constructor(private emailStatsService: EmailStatsService,
    private _constant: ConstantsService
    ) {}

  ngOnInit(): void {
    this.pieChartLabels = this._constant.monthlyChartLabels;
    this.emailStatsService.getTotalEmails().subscribe((res: any) => {
      let comEmails = this.emailStatsService.filterPieEmailsByType(res, "TOTAL");

      this.pieChartData = Object.values(comEmails.emailsSent);
    });
  }
}
