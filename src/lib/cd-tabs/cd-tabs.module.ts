import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdTabsComponent} from './cd-tabs.component';
import {CdTabComponent} from './cd-tab.component';
import {CdTabButtonComponent} from './cd-tab-button.component';
import {CdTabContentComponent} from './cd-tab-content.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [CdTabsComponent, CdTabComponent, CdTabButtonComponent, CdTabContentComponent],
    entryComponents: [CdTabsComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [CdTabsComponent, CdTabComponent, CdTabButtonComponent, CdTabContentComponent]
})
export class CdTabsModule {
}
