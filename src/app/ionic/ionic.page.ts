import {Component} from '@angular/core';

@Component({
    selector: 'app-ionic',
    templateUrl: './ionic.page.html',
    styleUrls: ['./ionic.page.scss'],
})
export class IonicPage {

    ionicColor = 'primary';
    ionicColors = [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'dark',
        'medium',
        'light'
    ];

    samples = {
        colors: `<cd-tabs>
  <cd-tab-bar color="primary">
    <cd-tab-button>Ionic Tab 1</cd-tab-button>
    <cd-tab-button>Ionic Tab 2</cd-tab-button>
  </cd-tab-bar>
</cd-tabs>`,
        icons: `<cd-tabs>
  <cd-tab-bar [color]="'success'">
    <cd-tab-button iconPosition="start">
      <ion-icon name="beer"></ion-icon>
      <ion-label>Beer</ion-label>
    </cd-tab-button>
    <cd-tab-button>
      <ion-icon name="pizza"></ion-icon>
      <ion-label>Pizza</ion-label>
    </cd-tab-button>
    <cd-tab-button iconPosition="end">
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

    onIonicColorChange(event) {
        this.ionicColor = event;
    }
}
