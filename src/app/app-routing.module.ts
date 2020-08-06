import { MyRadarChartComComponent } from './my-radar-chart-com/my-radar-chart-com.component';
import { MyRadarChartSeComponent } from './my-radar-chart-se/my-radar-chart-se.component';
import { MyBarChartTotalComponent } from './my-bar-chart-total/my-bar-chart-total.component';
import { MyBarChartComComponent } from './my-bar-chart-com/my-bar-chart-com.component';
import { MyBarChartSeComponent } from './my-bar-chart-se/my-bar-chart-se.component';
import { MyRadarChartTotalComponent } from './my-radar-chart-total/my-radar-chart-total.component';
import { MyLinearChartTotalComponent } from "./my-linear-chart-total/my-linear-chart-total.component";
import { MyPieChartTotalComponent } from "./my-pie-chart-total/my-pie-chart-total.component";
import { MyPieChartComComponent } from "./my-pie-chart-com/my-pie-chart-com.component";
import { MyPieChartSeComponent } from "./my-pie-chart-se/my-pie-chart-se.component";
import { MyLinearChartSeComponent } from "./my-linear-chart-se/my-linear-chart-se.component";

import { ChartSelector } from "./chart-selector/chart-selector";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyLinearChartComComponent } from "./my-linear-chart-com/my-linear-chart-com.component";

const routes: Routes = [
  { path: "bar-chart", component: ChartSelector ,children: [
    {
      path: "se", 
      component: MyBarChartSeComponent,
    },
    {
      path: "com",
      component: MyBarChartComComponent,
    },
    {
      path: "total",
      component: MyBarChartTotalComponent,
    },
  ],},
  {
    path: "linear-chart",
    component: ChartSelector,
    children: [
      {
        path: "se", 
        component: MyLinearChartSeComponent,
      },
      {
        path: "com",
        component: MyLinearChartComComponent,
      },
      {
        path: "total",
        component: MyLinearChartTotalComponent,
      },
    ],
  },
  { path: "radar-chart", component: ChartSelector,
  children: [
    {
      path: "se",
      component: MyRadarChartSeComponent,
    },
    {
      path: "com",
      component: MyRadarChartComComponent,
    },
    {
      path: "total",
      component: MyRadarChartTotalComponent,
    },
  ],
},
  {
    path: "pie-chart",
    component: ChartSelector,
    children: [
      {
        path: "se",
        component: MyPieChartSeComponent,
      },
      {
        path: "com",
        component: MyPieChartComComponent,
      },
      {
        path: "total",
        component: MyPieChartTotalComponent,
      },
    ],
  },
  { path: "**", component: ChartSelector },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
