import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    sample = `<cd-tabs>
    <cd-tab-bar>
        <cd-tab-button>Tab 1</cd-tab-button>
        <cd-tab-button>Tab 2</cd-tab-button>
        <cd-tab-button>Tab 3</cd-tab-button>
    </cd-tab-bar>
    <cd-tab-content>Tab 1 is displayed !</cd-tab-content>
    <cd-tab-content>Tab 2 is displayed !</cd-tab-content>
    <cd-tab-content>Tab 3 is displayed !</cd-tab-content>
</cd-tabs>`;

    constructor() {
    }

}
