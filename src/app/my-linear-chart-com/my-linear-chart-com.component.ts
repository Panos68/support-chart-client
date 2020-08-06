import { ConstantsService } from './../common/services/constants.service';
import { EmailStatsService } from './../email-stats.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-linear-chart-com",
  templateUrl: "./my-linear-chart-com.component.html",
  styleUrls: ["./my-linear-chart-com.component.css"],
})
export class MyLinearChartComComponent implements OnInit {
  public linearChartLabels = [""];

  public linearChartType = "line";

  public linearChartData = [
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
    this.linearChartLabels = this._constant.monthlyChartLabels;
    this.emailStatsService.getYearlyEmails().subscribe((res: any) => {
      let comEmails = this.emailStatsService.filterEmailsByType(res, "COM");
      this.emailStatsService.initializeGraphs(this.linearChartData, comEmails);
    });
  }
}