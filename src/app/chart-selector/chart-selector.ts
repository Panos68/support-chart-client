import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "chart-selector",
  templateUrl: "./chart-selector.html",
  styleUrls: ["./chart-selector.css"],
})
export class ChartSelector implements OnInit {

  constructor(public route: ActivatedRoute,public router: Router) {}

  ngOnInit(): void {}
}
