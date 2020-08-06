import { ConstantsService } from './common/services/constants.service';
import { MyRadarChartSeComponent } from "./my-radar-chart-se/my-radar-chart-se.component";
import { MyRadarChartComComponent } from "./my-radar-chart-com/my-radar-chart-com.component";
import { MyBarChartSeComponent } from "./my-bar-chart-se/my-bar-chart-se.component";
import { MyBarChartComComponent } from "./my-bar-chart-com/my-bar-chart-com.component";
import { MyLinearChartTotalComponent } from "./my-linear-chart-total/my-linear-chart-total.component";
import { MyPieChartTotalComponent } from "./my-pie-chart-total/my-pie-chart-total.component";
import { MyPieChartSeComponent } from "./my-pie-chart-se/my-pie-chart-se.component";
import { MyLinearChartSeComponent } from "./my-linear-chart-se/my-linear-chart-se.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyBarChartTotalComponent } from "./my-bar-chart-total/my-bar-chart-total.component";
import { ChartSelector } from "./chart-selector/chart-selector";
import { MyPieChartComComponent } from "./my-pie-chart-com/my-pie-chart-com.component";
import { MyLinearChartComComponent } from "./my-linear-chart-com/my-linear-chart-com.component";

import { MyRadarChartTotalComponent } from "./my-radar-chart-total/my-radar-chart-total.component";

@NgModule({
  declarations: [
    AppComponent,
    ChartSelector,
    MyBarChartTotalComponent,
    MyBarChartComComponent,
    MyBarChartSeComponent,
    MyLinearChartSeComponent,
    MyLinearChartComComponent,
    MyLinearChartTotalComponent,
    MyPieChartSeComponent,
    MyPieChartComComponent,
    MyPieChartTotalComponent,
    MyRadarChartSeComponent,
    MyRadarChartComComponent,
    MyRadarChartTotalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ConstantsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
