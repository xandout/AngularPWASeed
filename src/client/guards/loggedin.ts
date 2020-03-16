import {Injectable} from '@angular/core';
import {
    CanLoad, 
    CanActivate, 
    CanActivateChild, 
    Router, 
    Route, 
    ActivatedRouteSnapshot, 
    RouterStateSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from '@services/index';

@Injectable({
    providedIn: 'root'
})
export class IsLoggedInGuard implements CanLoad, CanActivate, CanActivateChild {
    loggedIn: boolean;

    constructor(
        private _router: Router,
        private _auth: AuthService
    ) {}

    canLoad(route: Route): Observable<boolean> {
        return this._isLoggedIn();
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._isLoggedIn();
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this._isLoggedIn();
    }

    private _isLoggedIn(): Observable<boolean> {
        return this._auth.isLoggedIn()
        .pipe(
            tap(isLoggedIn => {
                this.loggedIn = isLoggedIn;
                if (!isLoggedIn) {
                    console.log("Not logged in")
                    return this._router.navigate(['/login']);
                }
            })
        );
    }
}
