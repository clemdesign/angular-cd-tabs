import {
    AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, Input, Output,
    QueryList
} from '@angular/core';
import {CdTabBarComponent, CdTabBarInterface} from './cd-tab-bar.component';
import {CdTabContentComponent} from './cd-tab-content.component';
import {CdTabButtonComponent} from './cd-tab-button.component';

export interface CdTabContentInterface extends CdTabBarInterface {
    tabContent?: CdTabContentComponent;
}

export interface CdTabInterface {
    num: number;
    tabId: string;
}

@Component({
    selector: 'cd-tabs',
    template: `
      <div class="tabs-container" [class.vertical]="disposition === 'vertical'">
        <ng-content></ng-content>
      </div>`,
    styles: [`.vertical {
        display: flex;
    }`]
})
export class CdTabsComponent implements AfterContentInit {

    @ContentChild(CdTabBarComponent, {static: false}) tabBar: CdTabBarComponent;
    @ContentChildren(CdTabContentComponent) tabsContent: QueryList<CdTabContentComponent>;

    @Output() tabContentChanged = new EventEmitter<CdTabContentInterface|null>();
    @Output() tabChanged = new EventEmitter<CdTabInterface|null>();

    @Input() selectMode = 'config';
    @Input() displayMode = 'default';
    @Input() disposition = '';

    ngAfterContentInit() {
        this.tabBar.tabSelectedEvent.subscribe((tabData) => this.activeTabContent(tabData));

        this.tabBar.selectMode = this.selectMode;
        this.tabBar.displayMode = this.displayMode;
        this.tabBar.disposition = this.disposition;
    }

    /**
     * Select a tab according num, tab id or CdTabButtonComponent
     */
    public select(tab: number | string | CdTabButtonComponent) {
        return new Promise<boolean>((resolve) => {
            if (this.tabBar) {
                this.tabBar.select(tab)
                    .then((result) => resolve(result))
                    .catch(() => resolve(false));
            } else {
                resolve(false);
            }
        });
    }

    /**
     * Get selected tab
     */
    public getSelected() {
        return new Promise<CdTabContentInterface | null>((resolve) => {
            if (this.tabBar) {
                this.tabBar.getSelected().then((result) => {
                    if (result !== null) {
                        resolve({
                            num: result.num,
                            tabId: result.tabId,
                            tabButton: result.tabButton,
                            tabContent: this.getActivatedTabContent()
                        });
                    } else {
                        resolve(null);
                    }
                }).catch(() => resolve(null));
            } else {
                resolve(null);
            }
        });
    }

    /**
     * Get a tab according number, tab id or CdTabButtonComponent
     */
    public getTab(tab: number | string | CdTabButtonComponent) {
        return new Promise<CdTabContentInterface | null>((resolve) => {
            if (this.tabBar) {
                this.tabBar.getTab(tab).then((result) => {
                    if (result !== null) {
                        resolve({
                            num: result.num,
                            tabId: result.tabId,
                            tabButton: result.tabButton,
                            tabContent: this.getActivatedTabContent()
                        });
                    } else {
                        resolve(null);
                    }
                }).catch(() => resolve(null));
            } else {
                resolve(null);
            }
        });
    }

    /**
     * Ge the activated tab content
     */
    private getActivatedTabContent() {
        this.tabsContent.toArray().forEach(tabFn => {
            if (tabFn.activeState === true) {
                return tabFn;
            }
        });
        return null;
    }

    /**
     * Active the tab content
     */
    private activeTabContent(tabData: CdTabBarInterface) {
        let index = 0;
        this.tabChanged.emit({
            num: tabData.num,
            tabId: tabData.tabId
        });
        this.tabsContent.toArray().forEach(tabFn => {
            tabFn.active = false;
            if (tabData.tabId) {
                if (tabData.tabId === tabFn.id) {
                    tabFn.active = true;
                    this.emitTabContentChanged(tabData, tabFn);
                }
            } else {
                if (index === tabData.num) {
                    tabFn.active = true;
                    this.emitTabContentChanged(tabData, tabFn);
                }
            }
            index++;
        });
    }

    /**
     * Emit the event when tab changed
     */
    private emitTabContentChanged(tabBar: CdTabBarInterface, tabCnt: CdTabContentComponent) {
        this.tabContentChanged.emit({
            num: tabBar.num,
            tabId: tabBar.tabId,
            tabButton: tabBar.tabButton,
            tabContent: tabCnt
        });
    }

}
