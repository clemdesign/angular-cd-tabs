import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-ionic',
    templateUrl: './ionic.page.html',
    styleUrls: ['./ionic.page.scss'],
})
export class IonicPage implements OnInit {

    samples = {
        icons: `<cd-tabs>
  <cd-tab-bar [color]="'success'">
    <cd-tab-button>
      <ion-icon name="beer"></ion-icon>
      <ion-label>Beer</ion-label>
    </cd-tab-button>
    <cd-tab-button>
      <ion-icon name="pizza"></ion-icon>
      <ion-label>Pizza</ion-label>
    </cd-tab-button>
    <cd-tab-button>
      <ion-icon name="cafe"></ion-icon>
      <ion-label>Coffee</ion-label>
    </cd-tab-button>
  </cd-tab-bar>
</cd-tabs>`,
        badges: `<cd-tabs>
  <cd-tab-bar [color]="'light'">
    <cd-tab-button>
      <ion-icon name="beer"></ion-icon>
      <ion-label>Beer</ion-label>
      <ion-badge>2</ion-badge>
    </cd-tab-button>
    <cd-tab-button>
      <ion-icon name="pizza"></ion-icon>
      <ion-label>Pizza</ion-label>
      <ion-badge color="secondary">1</ion-badge>
    </cd-tab-button>
    <cd-tab-button>
      <ion-icon name="cafe"></ion-icon>
      <ion-label>Coffee</ion-label>
      <ion-badge color="warning">0</ion-badge>
    </cd-tab-button>
  </cd-tab-bar>
</cd-tabs>`
    };

    constructor() {
    }

    ngOnInit() {
    }

}
