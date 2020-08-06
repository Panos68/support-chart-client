import { ConstantsService } from './../common/services/constants.service';
import { EmailStatsService } from "./../email-stats.service";
import { Component, OnInit } from "@angular/core";
import { analyzeAndValidateNgModules } from "@angular/compiler";

@Component({
  selector: "my-pie-chart-com",
  templateUrl: "./my-pie-chart-com.component.html",
  styleUrls: ["./my-pie-chart-com.component.css"],
})
export class MyPieChartComComponent implements OnInit {
  public pieChartLabels = [""];

  public pieChartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  public pieChartType = "pie";

  constructor(private emailStatsService: EmailStatsService,
    private _constant: ConstantsService
    ) {}

  ngOnInit(): void {
    this.pieChartLabels = this._constant.monthlyChartLabels;
    this.emailStatsService.getTotalEmails().subscribe((res: any) => {
      let comEmails = this.emailStatsService.filterPieEmailsByType(res, "COM");

      this.pieChartData = Object.values(comEmails.emailsSent);
    });
  }
}