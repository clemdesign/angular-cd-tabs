import { AfterContentInit, EventEmitter, QueryList } from '@angular/core';
import { CdTabBarComponent, CdTabBarInterface } from './cd-tab-bar.component';
import { CdTabContentComponent } from './cd-tab-content.component';
import { CdTabButtonComponent } from './cd-tab-button.component';
export interface CdTabInterface extends CdTabBarInterface {
    tabContent?: CdTabContentComponent;
}
export declare class CdTabsComponent implements AfterContentInit {
    tabBar: CdTabBarComponent;
    tabsContent: QueryList<CdTabContentComponent>;
    tabChangedEvent: EventEmitter<CdTabInterface>;
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
    getSelected(): Promise<CdTabInterface>;
    /**
     * Get a tab according number, tab id or CdTabButtonComponent
     */
    getTab(tab: number | string | CdTabButtonComponent): Promise<CdTabInterface>;
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
    private emitTabChanged;
}
