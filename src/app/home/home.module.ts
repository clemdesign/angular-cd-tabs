import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {CdTabsModule} from 'angular-cd-tabs';
import {PrismModule} from '@ngx-prism/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        CdTabsModule,
        PrismModule
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
