import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import {  map, Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})
export class AuthAdminGuard implements CanActivate {
    constructor(private authService : AuthService, private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.pipe(map(user => {
            const isAuth= user && user.role==="ADMIN" ? true : false;
            if(isAuth) {
                return true
            } 
            return this.router.createUrlTree(['/dashboard'])
        }))
    }

}