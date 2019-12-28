import {Component} from '@angular/core';

@Component({
    selector: 'app-standalone',
    templateUrl: './standalone.page.html',
    styleUrls: ['./standalone.page.scss'],
})
export class StandalonePage {

    samples = {
        colors: {
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
        },
        icons: `<cd-tabs>
  <cd-tab-bar [color]="'tertiary'">
    <cd-tab-button iconPosition="start">
      <i class="fas fa-beer"></i>
      <label>Beer</label>
    </cd-tab-button>
    <cd-tab-button>
      <i class="fas fa-pizza-slice"></i>
      <label>Pizza</label>
    </cd-tab-button>
    <cd-tab-button iconPosition="end">
      <i class="fas fa-coffee"></i>
      <label>Coffee</label>
    </cd-tab-button>
  </cd-tab-bar>
</cd-tabs>`
    };

    constructor() {
    }

}
