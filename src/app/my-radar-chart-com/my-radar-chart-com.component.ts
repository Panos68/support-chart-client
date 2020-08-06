import { ConstantsService } from "./../common/services/constants.service";
import { EmailStatsService } from "./../email-stats.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-radar-chart-com",
  templateUrl: "./my-radar-chart-com.component.html",
  styleUrls: ["./my-radar-chart-com.component.css"],
})
export class MyRadarChartComComponent implements OnInit {
  public radarChartLabels = [""];

  public radarChartType = "radar";

  public radarChartData = [
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
    this.radarChartLabels = this._constant.monthlyChartLabels;
    
    this.emailStatsService.getYearlyEmails().subscribe((res: any) => {
      let comEmails = this.emailStatsService.filterEmailsByType(res, "COM");
      this.emailStatsService.initializeGraphs(this.radarChartData, comEmails);
    });
  }
}
