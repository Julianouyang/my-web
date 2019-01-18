import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor() {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return false;
    }
}
