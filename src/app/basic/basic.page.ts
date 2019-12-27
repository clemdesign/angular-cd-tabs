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
            ionic: `<cd-tabs color="primary">
  <cd-tab>
    <cd-tab-button>Ionic Tab 1</cd-tab-button>
  </cd-tab>
  <cd-tab>
    <cd-tab-button>Ionic Tab 2</cd-tab-button>
  </cd-tab>
</cd-tabs>`,
            standalone: {
                html: `<cd-tabs class="standalone-tabs">
  <cd-tab>
    <cd-tab-button>Ionic Tab 1</cd-tab-button>
  </cd-tab>
  <cd-tab>
    <cd-tab-button>Ionic Tab 2</cd-tab-button>
  </cd-tab>
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
