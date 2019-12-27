import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {CdTabsModule} from '../../lib/cd-tabs/cd-tabs.module';
import {PrismModule} from '@ngx-prism/core';
import {BasicPage} from './basic.page';
import {FormsModule} from '@angular/forms';


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
        FormsModule,
        CdTabsModule,
        PrismModule
    ]
})
export class BasicPageModule {
}
