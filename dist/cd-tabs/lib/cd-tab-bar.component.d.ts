import { AfterViewInit, ElementRef, EventEmitter, OnInit, QueryList } from '@angular/core';
import { CdTabButtonComponent } from './cd-tab-button.component';
import { Router } from '@angular/router';
export interface CdTabBarInterface {
    num: number;
    tabId: string;
    tabButton: CdTabButtonComponent;
}
export declare class CdTabBarComponent implements AfterViewInit, OnInit {
    private elt;
    private router;
    tabsButton: QueryList<CdTabButtonComponent>;
    tabSelectedEvent: EventEmitter<CdTabBarInterface>;
    readonly buttons: QueryList<CdTabButtonComponent>;
    disposition: string;
    displayMode: string;
    selected: any;
    color: any;
    active: boolean;
    colorValue: string;
    selectMode: string;
    baseClass: string;
    constructor(elt: ElementRef, router: Router);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    /**
     * Select a tab according number, tab id or CdTabButtonComponent
     */
    select(tab: number | string | CdTabButtonComponent): Promise<boolean>;
    /**
     * Get selected component
     */
    getSelected(): Promise<CdTabBarInterface>;
    /**
     * Get the tab according number, tab Id or CdTabButtonComponent
     */
    getTab(tabRef: number | string | CdTabButtonComponent): Promise<CdTabBarInterface>;
    /**
     * Select a tab
     */
    private selectTab;
    /**
     * Deactivate all tabs
     */
    private deactivateAllTabs;
    /**
     * Emit the event {tabSelectedEvent}
     */
    private emitTabSelected;
    /**
     * Build the CSS class of cd-tab-bar
     */
    private buildCss;
}
