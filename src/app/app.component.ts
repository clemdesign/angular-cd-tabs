import {Component, ViewChild} from '@angular/core';

import {IonMenu, Platform} from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    @ViewChild('menuMainContent', {static: true}) menuMainContent: IonMenu;

    public appMenu = [
        {
            title: 'Home',
            url: '/',
            icon: 'home'
        },
        {
            title: 'Basic Usage',
            url: '/basic-usage',
            icon: 'cafe'
        },
        {
            title: 'Components API',
            url: '/components-api',
            icon: 'grid'
        },
        {
            title: 'Ionic Integration',
            url: '/ionic-integration',
            icon: 'logo-ionic'
        },
        {
            title: 'Standalone Integration',
            url: '/standalone-integration',
            icon: 'switch'
        },
        {
            title: 'Common Integration',
            url: '/common-integration',
            icon: 'medical'
        },
    ];

    constructor(private platform: Platform) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
        });
    }

    onMenuSelected() {
        if (this.menuMainContent && this.menuMainContent.isOpen()) {
            this.menuMainContent.close();
        }
    }
}
