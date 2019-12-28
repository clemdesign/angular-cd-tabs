import {Component} from '@angular/core';

@Component({
    selector: 'app-basic',
    templateUrl: './basic.page.html',
    styleUrls: ['./basic.page.scss'],
})
export class BasicPage {


    samples = {
        colors: {
            standalone: {
                html: `<cd-tabs>
  <cd-tab-bar class="standalone-tabs">
    <cd-tab-button>Ionic Tab 1</cd-tab-button>
    <cd-tab-button>Ionic Tab 2</cd-tab-button>
  </cd-tab-bar>
</cd-tabs>`,
                css: `.standalone-tabs {
  --cd-color: #FFFFFF;
  --cd-color-selected: #FFFFFF;
  --cd-color-hover: #FFFFFF;
  --cd-background: #925bc8;
  --cd-background-selected: #7453a5;
  --cd-background-hover: #aa5ee2;
}`
            }
        },
        vertical: `<cd-tabs disposition="vertical">
  <cd-tab-bar>
    <cd-tab-button>Tab 1</cd-tab-button>
    <cd-tab-button>Tab 2</cd-tab-button>
  </cd-tab-bar>
  <cd-tab-content>Tab 1 is displayed !</cd-tab-content>
  <cd-tab-content>Tab 2 is displayed !</cd-tab-content>
</cd-tabs>`,
        router: `<cd-tabs selectMode="router">
  <cd-tab-bar>
    <cd-tab-button [routerLink]="['home']">
      Home
    </cd-tab-button>
  </cd-tab-bar>
</cd-tabs>`
    };

    constructor() {
    }

}
