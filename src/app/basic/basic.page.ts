import {Component} from '@angular/core';

@Component({
    selector: 'app-basic',
    templateUrl: './basic.page.html',
    styleUrls: ['./basic.page.scss'],
})
export class BasicPage {

    ionicColor: 'primary';

    samples = {
        colors: {
            ionic: `<cd-tabs>
  <cd-tab-bar color="primary">
    <cd-tab-button>Ionic Tab 1</cd-tab-button>
    <cd-tab-button>Ionic Tab 2</cd-tab-button>
  </cd-tab-bar>
</cd-tabs>`,
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
        }
    };

    constructor() {
    }

    onIonicColorChange(event) {
        this.ionicColor = event;
    }

}
