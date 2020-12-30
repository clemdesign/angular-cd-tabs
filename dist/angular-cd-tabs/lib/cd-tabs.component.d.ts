import { AfterContentInit, EventEmitter, QueryList } from '@angular/core';
import { CdTabBarComponent, CdTabBarInterface } from './cd-tab-bar.component';
import { CdTabContentComponent } from './cd-tab-content.component';
import { CdTabButtonComponent } from './cd-tab-button.component';
export interface CdTabContentInterface extends CdTabBarInterface {
    tabContent?: CdTabContentComponent;
}
export interface CdTabInterface {
    num: number;
    tabId: string;
}
export declare class CdTabsComponent implements AfterContentInit {
    tabBar: CdTabBarComponent;
    tabsContent: QueryList<CdTabContentComponent>;
    tabContentChanged: EventEmitter<CdTabContentInterface>;
    tabChanged: EventEmitter<CdTabInterface>;
    selectMode: string;
    displayMode: string;
    disposition: string;
    ngAfterContentInit(): void;
    /**
     * Select a tab according num, tab id or CdTabButtonComponent
     */
    select(tab: number | string | CdTabButtonComponent): Promise<boolean>;
    /**
     * Get selected tab
     */
    getSelected(): Promise<CdTabContentInterface>;
    /**
     * Get a tab according number, tab id or CdTabButtonComponent
     */
    getTab(tab: number | string | CdTabButtonComponent): Promise<CdTabContentInterface>;
    /**
     * Ge the activated tab content
     */
    private getActivatedTabContent;
    /**
     * Active the tab content
     */
    private activeTabContent;
    /**
     * Emit the event when tab changed
     */
    private emitTabContentChanged;
}
