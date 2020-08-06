import { ConstantsService } from './../common/services/constants.service';
import { EmailStatsService } from './../email-stats.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-linear-chart-se",
  templateUrl: "./my-linear-chart-se.component.html",
  styleUrls: ["./my-linear-chart-se.component.css"],
})
export class MyLinearChartSeComponent implements OnInit {
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
      let comEmails = this.emailStatsService.filterEmailsByType(res, "SE");
      this.emailStatsService.initializeGraphs(this.linearChartData, comEmails);
    });
  }
}
