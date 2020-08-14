import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService implements CanActivate {
  userLoggedIn = false;

  canActivate() {
    if (this.userLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  setActivate() {
    this.userLoggedIn = !this.userLoggedIn;
  }
}
