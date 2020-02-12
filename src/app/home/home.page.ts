import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    // This one is implemented to check and validate issue about content checked
    display = false;

    samples = {
        basic: `<cd-tabs>
    <cd-tab-bar>
        <cd-tab-button>Tab 1</cd-tab-button>
        <cd-tab-button>Tab 2</cd-tab-button>
        <cd-tab-button>Tab 3</cd-tab-button>
    </cd-tab-bar>
    <cd-tab-content>Tab 1 is displayed !</cd-tab-content>
    <cd-tab-content>Tab 2 is displayed !</cd-tab-content>
    <cd-tab-content>Tab 3 is displayed !</cd-tab-content>
</cd-tabs>`,
        installation: `import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CdTabsModule} from 'angular-cd-tabs';

@NgModule({
    imports: [
        CommonModule,
        // Add the following lines
        RouterModule.forRoot([
            {
                path: '',
                component: AppComponent
            }
        ]),
        CdTabsModule,
    ],
    declarations: [AppComponent]
})
export class AppComponentModule {}`
    };

    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
            this.display = true;
        }, 200);
    }

}
