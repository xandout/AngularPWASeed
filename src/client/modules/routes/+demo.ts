import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@modules/shared';
import {DemoComponent} from '@components/demo/component';
import {LogoutComponent} from '@components/logout'

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(
            [
                {path: '', pathMatch: 'full', component: DemoComponent},
            ]
        )
    ],
    declarations: [
        DemoComponent,
        LogoutComponent
    ]
})
export class DemoLazyModule {}
