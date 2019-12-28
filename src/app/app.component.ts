import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    public appMenu = [
        {
            title: 'Home',
            url: '/',
            icon: 'home'
        },
        {
            title: 'Basic Usage',
            url: '/basic',
            icon: 'cafe'
        },
        {
            title: 'Components API',
            url: '/component',
            icon: 'grid'
        },
        {
            title: 'Ionic Integration',
            url: '/ionic',
            icon: 'logo-ionic'
        },
        {
            title: 'Standalone Integration',
            url: '/standalone',
            icon: 'switch'
        },
        {
            title: 'Common Integration',
            url: '/common',
            icon: 'medical'
        },
    ];

    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
