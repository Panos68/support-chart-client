import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmailStatsService {
  constructor(private http: HttpClient) {}

  totalEmailsUrl = "http://localhost:8080/supportChart/total";

  yearlyEmailsUrl = "http://localhost:8080/supportChart/yearly";

  login = "http://localhost:8080/supportChart/login";

  getTotalEmails(): Observable<any> {
    return this.http.get(this.totalEmailsUrl);
  }

  getYearlyEmails(): Observable<any> {
    return this.http.get(this.yearlyEmailsUrl);
  }

  isPinCorrect(givenPin: any): Observable<any> {
    let httpParams = new HttpParams().set('givenPin', givenPin); 
    return this.http.get(this.login, { params: httpParams });
  }

  filterPieEmailsByType(emailStats: any, type: String): any {
    let comEmails: any;
    emailStats.forEach((emailStat) => {
      if (emailStat.type == type) {
        comEmails = emailStat;
      }
    });
    return comEmails;
  }

  filterEmailsByType(emailStats: any, type: String): any {
    let comEmails: any;
    comEmails = emailStats.filter((e) => e.type == type);
    return comEmails;
  }

  getRandomColor(): any {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  initializeGraphs(chartData: any, comEmails: any) {
    chartData.pop();
    comEmails.forEach((email) => {
      let color = this.getRandomColor();
      chartData.push({
        data: Object.values(email.emailsSent),
        backgroundColor: color,
        label: email.year,
        fill: "false",
        borderColor: color,
      });
    });
  }
}
