import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SubscriberComponent} from '@core/index';
import {AuthService} from '@services/index';
import {LogoutComponent} from '@components/logout'


@Component({
    selector: 'demo',
    templateUrl: './template.html'
})
export class DemoComponent extends SubscriberComponent {
    
}
