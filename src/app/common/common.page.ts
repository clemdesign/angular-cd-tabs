import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CdTabInterface, CdTabsComponent} from '../../lib/cd-tabs/cd-tabs.component';

@Component({
    selector: 'app-common',
    templateUrl: './common.page.html',
    styleUrls: ['./common.page.scss'],
})
export class CommonPage implements AfterViewInit {

    @ViewChild('CdTabs', {static: false}) cdTabs: CdTabsComponent;

    samples = {
        ripple: `<cd-tabs>
  <cd-tab-bar [color]="'tertiary'">
    <cd-tab-button ripple="bounded">Bounded Ripple</cd-tab-button>
    <cd-tab-button ripple="unbounded">Unbunded Ripple</cd-tab-button>
    <cd-tab-button>No Ripple</cd-tab-button>
  </cd-tab-bar>
</cd-tabs>`,
        segments: `<cd-tabs displayMode="segments">
  <cd-tab-bar [color]="'warning'">
    <cd-tab-button ripple="bounded">Bounded Ripple</cd-tab-button>
    <cd-tab-button ripple="unbounded">Unbunded Ripple</cd-tab-button>
    <cd-tab-button>No Ripple</cd-tab-button>
  </cd-tab-bar>
</cd-tabs>`,
        tabId: `<cd-tabs>
  <cd-tab-bar [color]="'success'">
    <cd-tab-button tab="beer">Beer</cd-tab-button>
    <cd-tab-button tab="pizza">Pizza</cd-tab-button>
    <cd-tab-button tab="coffee">Coffee</cd-tab-button>
  </cd-tab-bar>
  <cd-tab-content id="coffee"><ion-icon name="cafe"></ion-icon></cd-tab-content>
  <cd-tab-content id="beer"><ion-icon name="beer"></ion-icon></cd-tab-content>
  <cd-tab-content id="pizza"><ion-icon name="pizza"></ion-icon></cd-tab-content>
</cd-tabs>`,
        controls: {
            html: `<cd-tabs #CdTabs (tabChangedEvent)="onTabChanged($event)">
  <cd-tab-bar [color]="'danger'">
    <cd-tab-button tab="beer">Beer</cd-tab-button>
    <cd-tab-button tab="pizza">Pizza</cd-tab-button>
    <cd-tab-button tab="coffee">Coffee</cd-tab-button>
  </cd-tab-bar>
  <cd-tab-content id="coffee"><ion-icon name="cafe"></ion-icon></cd-tab-content>
  <cd-tab-content id="beer"><ion-icon name="beer"></ion-icon></cd-tab-content>
  <cd-tab-content id="pizza"><ion-icon name="pizza"></ion-icon></cd-tab-content>
</cd-tabs>`,
            ts: `@ViewChild('CdTabs', {static: false}) cdTabs: CdTabsComponent;

eventMessage = 'No message !';
tabValue: any;

onTabChanged(event: CdTabInterface) {
    this.eventMessage = 'Tab ' + event.num + (event.tabId ? ' (tabId=' + event.tabId + ') ' : '') + 'selected !';
}

getSelectedTabAction() {
    this.cdTabs.getSelected().then(tabSelected => {
        this.eventMessage = 'The selected tab is: ' +
            tabSelected.num + (tabSelected.tabId ? ' (tabId="' + tabSelected.tabId + '") ' : '');
    });
}

getTabAction() {
    if (this.tabValue && !isNaN(this.tabValue)) {
        this.tabValue = parseInt(this.tabValue, 10);
    }
    this.cdTabs.getTab(this.tabValue).then((tabData) => {
        if (tabData) {
            this.eventMessage = 'The tab requested is: ' + tabData.num + (tabData.tabId ? ' (tabId="' + tabData.tabId + '") ' : '');
        } else {
            this.eventMessage = 'ERROR: The tab ' + this.tabValue + ' does not exist !';
        }
    });
}

selectAction() {
    if (this.tabValue && !isNaN(this.tabValue)) {
        this.tabValue = parseInt(this.tabValue, 10);
    }
    this.cdTabs.select(this.tabValue).then((result) => {
        if (!result) {
            this.eventMessage = 'ERROR: The tab ' + this.tabValue + ' does not exist !';
        }
    });
}
`
        }
    };

    eventMessage = 'No message !';
    tabValue: any;

    constructor() {
    }

    ngAfterViewInit() {
    }

    onTabChanged(event: CdTabInterface) {
        this.eventMessage = 'Tab ' + event.num + (event.tabId ? ' (tabId=' + event.tabId + ') ' : '') + 'selected !';
    }

    getSelectedTabAction() {
        this.cdTabs.getSelected().then(tabSelected => {
            this.eventMessage = 'The selected tab is: ' +
                tabSelected.num + (tabSelected.tabId ? ' (tabId="' + tabSelected.tabId + '") ' : '');
        });
    }

    getTabAction() {
        if (this.tabValue && !isNaN(this.tabValue)) {
            this.tabValue = parseInt(this.tabValue, 10);
        }
        this.cdTabs.getTab(this.tabValue).then((tabData) => {
            if (tabData) {
                this.eventMessage = 'The tab requested is: ' + tabData.num + (tabData.tabId ? ' (tabId="' + tabData.tabId + '") ' : '');
            } else {
                this.eventMessage = 'ERROR: The tab ' + this.tabValue + ' does not exist !';
            }
        });
    }

    selectAction() {
        if (this.tabValue && !isNaN(this.tabValue)) {
            this.tabValue = parseInt(this.tabValue, 10);
        }
        this.cdTabs.select(this.tabValue).then((result) => {
            if (!result) {
                this.eventMessage = 'ERROR: The tab ' + this.tabValue + ' does not exist !';
            }
        });
    }

}
