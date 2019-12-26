import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sample = `<cd-tabs>
    <cd-tab>
        <cd-tab-button>Tab 1</cd-tab-button>
        <cd-tab-content>Tab 1 is displayed !</cd-tab-content>
    </cd-tab>
    <cd-tab>
        <cd-tab-button>Tab 2</cd-tab-button>
        <cd-tab-content>Tab 2 is displayed !</cd-tab-content>
    </cd-tab>
</cd-tabs>`;

  constructor() {}

}
