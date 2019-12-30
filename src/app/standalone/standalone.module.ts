import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StandalonePage} from './standalone.page';
import {RouterModule} from '@angular/router';
import {CdTabsModule} from 'cd-tabs';
import {PrismModule} from '@ngx-prism/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([{
            path: '',
            component: StandalonePage
        }]),
        CdTabsModule,
        PrismModule
    ],
    declarations: [StandalonePage]
})
export class StandalonePageModule {
}
