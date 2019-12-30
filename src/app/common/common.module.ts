import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CommonPage} from './common.page';
import {RouterModule} from '@angular/router';
import {CdTabsModule} from 'cd-tabs';
import {PrismModule} from '@ngx-prism/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: CommonPage
            }
        ]),
        CdTabsModule,
        PrismModule
    ],
    declarations: [CommonPage]
})
export class CommonPageModule {
}
