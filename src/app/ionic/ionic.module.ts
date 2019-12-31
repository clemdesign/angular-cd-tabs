import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {IonicPage} from './ionic.page';
import {RouterModule} from '@angular/router';
import {CdTabsModule} from 'angular-cd-tabs';
import {PrismModule} from '@ngx-prism/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{
            path: '',
            component: IonicPage
        }]),
        CdTabsModule,
        PrismModule
    ],
    declarations: [IonicPage]
})
export class IonicPageModule {
}
