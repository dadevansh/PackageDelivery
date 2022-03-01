import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isUserLoggedIn();
  }

  isUserLoggedIn(){
    let userToken = localStorage.getItem("userAccessToken") ? (localStorage.getItem("userAccessToken")) : false;
    if(userToken){
      console.log("here in if")
      return true;
    }
    else {
      console.log("here in else")
      this.router.navigateByUrl("login");
      return false;
    }
  }
  
}