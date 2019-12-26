import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {CdTabsModule} from '../../lib/cd-tabs/cd-tabs.module';
import {PrismModule} from '@ngx-prism/core';
import {BasicPage} from './basic.page';


@NgModule({
    declarations: [BasicPage],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: BasicPage
            }
        ]),
        CdTabsModule,
        PrismModule
    ]
})
export class BasicPageModule {
}
