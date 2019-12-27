import {
    AfterContentInit, Component, ContentChild, ContentChildren, Input,
    QueryList
} from '@angular/core';
import {CdTabBarComponent} from './cd-tab-bar.component';
import {CdTabContentComponent} from './cd-tab-content.component';
import {CdTabButtonComponent} from './cd-tab-button.component';

@Component({
    selector: 'cd-tabs',
    template: `<div class="tabs-container" [class.vertical]="disposition === 'vertical'"><ng-content></ng-content></div>`,
    styles: [`.vertical {
        display: flex;
    }`]
})
export class CdTabsComponent implements AfterContentInit {

    @ContentChild(CdTabBarComponent, {static: false}) tabBar: CdTabBarComponent;
    @ContentChildren(CdTabContentComponent) tabsContent: QueryList<CdTabContentComponent>;

    @Input() selectMode = 'config';
    @Input() displayMode = 'none';
    @Input() disposition = '';

    ngAfterContentInit() {
        this.tabBar.tabSelectedEvent.subscribe((tabData) => this.activeTabContent(tabData));

        this.tabBar.selectMode = this.selectMode;
        this.tabBar.displayMode = this.displayMode;
        this.tabBar.disposition = this.disposition;
    }

    /**
     * Active the tab content
     * @param {any} tabData
     */
    private activeTabContent(tabData: { num: number; tabId: string; tab: CdTabButtonComponent }) {
        let index = 0;
        this.tabsContent.toArray().forEach(tabFn => {
            tabFn.active = false;
            if (tabData.tabId) {
                if (tabData.tabId === tabFn.id) {
                    tabFn.active = true;
                }
            } else {
                if (index === tabData.num) {
                    tabFn.active = true;
                }
            }
            index++;
        });
    }

}
