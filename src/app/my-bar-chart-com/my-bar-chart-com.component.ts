import { ConstantsService } from "./../common/services/constants.service";
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

  public barChartLabels = [""];

  public barChartType = "bar";
  public barChartLegend = true;

  public barChartData = [
    {
      data: [0],
      label: "",
      backgroundColor: this.emailStatsService.getRandomColor(),
    },
  ];

  constructor(
    private emailStatsService: EmailStatsService,
    private _constant: ConstantsService
  ) {}

  ngOnInit(): void {
    this.barChartLabels = this._constant.monthlyChartLabels;
    this.emailStatsService.getYearlyEmails().subscribe((res: any) => {
      let comEmails = this.emailStatsService.filterEmailsByType(res, "COM");
      this.emailStatsService.initializeGraphs(this.barChartData, comEmails);
    });
  }
}
