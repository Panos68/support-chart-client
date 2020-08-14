import { EmailStatsService } from "./email-stats.service";
import { AuthGuardService } from "./auth-guard.service";
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "supportChart";

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private authGuard: AuthGuardService,
    private emailStatsService: EmailStatsService
  ) {}

  checkPin(pin: any) {
    this.emailStatsService
      .isPinCorrect(pin.target.value)
      .subscribe((res: any) => {
        if (res === true) {
          this.router.navigate(["home"], { relativeTo: this.route });
          this.authGuard.setActivate();
        }
      });
  }
}
