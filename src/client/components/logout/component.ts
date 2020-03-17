import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SubscriberComponent} from '@core/index';
import {AuthService} from '@services/index';


@Component({
    selector: 'logout',
    templateUrl: './template.html'
})
export class LogoutComponent extends SubscriberComponent {
    serverError: string;

    constructor(
        private _auth: AuthService,
        private _router: Router

    ) {
        super();
    }
    logout() {
        this.serverError = null;
        this.addSubscription(
            this._auth.logOut()
            .subscribe(
                _ => {
                    console.log("Logging out")
                    this._router.navigateByUrl('/login');
                },
                err => {
                    console.log(err)
                    this.serverError = 'Could not login at this time'
                }
            )
        );
    }
}
