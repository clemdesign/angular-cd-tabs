import {
    AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter,
    Input, OnInit, Output,
    QueryList
} from '@angular/core';
import {CdTabButtonComponent} from './cd-tab-button.component';
import {NavigationEnd, Router} from '@angular/router';

export interface CdTabBarInterface {
    num: number;
    tabId: string;
    tabButton: CdTabButtonComponent;
}

@Component({
    selector: 'cd-tab-bar',
    template: `
      <div class="bar-container"
           [class.vertical]="disposition === 'vertical'"
           [class.align-center]="disposition === 'center'"
           [class.align-right]="disposition === 'right'"
           [class.segments]="displayMode === 'segments'">
        <ng-content></ng-content>
      </div>`,
    styleUrls: ['./cd-tab-bar.component.scss']
})
export class CdTabBarComponent implements AfterViewInit, OnInit {
    @ContentChildren(CdTabButtonComponent) tabsButton: QueryList<CdTabButtonComponent>;

    @Output() tabSelectedEvent = new EventEmitter<CdTabBarInterface>();

    @Output()
    get buttons() {
        return this.tabsButton;
    }

    @Input() disposition = '';
    @Input() displayMode = 'default';

    @Input()
    set selected(value) {
        this.active = value;
    }

    @Input()
    set color(value) {
        this.colorValue = value;
        this.buildCss();
    }

    active: boolean;
    colorValue: string;
    selectMode: string;
    baseClass = '';

    constructor(private elt: ElementRef, private router: Router) {
    }

    ngOnInit() {
        if (this.active === undefined) {
            this.active = false;
        }
        if (this.elt && this.elt.nativeElement) {
            this.baseClass = this.elt.nativeElement.className;
        }
    }

    ngAfterViewInit() {
        if (this.selectMode === 'router') {
            // deactivate all tabs if router link defined
            this.tabsButton.toArray().forEach((tabFn) => {
                tabFn.active = false;
            });

            // look for select tab according route
            this.router.events.subscribe((res) => {
                if (res instanceof NavigationEnd) {
                    const relatedTabs = this.tabsButton.filter((tabFn) =>
                        (tabFn.routerLink.join('/').length > 3 && res.url.indexOf(tabFn.routerLink.join('/')) >= 0) ||
                        (tabFn.routerLink.join('/') === res.url));

                    // decativate all tabs
                    this.deactivateAllTabs();

                    // if related url found
                    if (relatedTabs.length > 0) {
                        this.selectTab(relatedTabs[0]);
                    }
                }
            });
        } else {
            // get all active tabs
            const activeTabs = this.tabsButton.filter((tab) => tab.active);

            // if there is no active tab set, activate the first
            if (activeTabs.length === 0) {
                this.selectTab(this.tabsButton.first);
            } else {
                this.selectTab(activeTabs[0]);
            }
        }

        // event
        this.tabsButton.toArray().forEach((tabFn) => tabFn.buttonClick.subscribe((selectedTab) => {
            // decativate all tabs
            this.deactivateAllTabs();

            this.selectTab(selectedTab, true);
        }));

    }

    /**
     * Select a tab according number, tab id or CdTabButtonComponent
     * @param {number | string | CdTabButtonComponent} tab
     * @returns {Promise<boolean>}
     */
    public select(tab: number | string | CdTabButtonComponent) {
        return new Promise<boolean>((resolve) => {
            this.getTab(tab).then((result) => {
                if (result !== null) {
                    this.deactivateAllTabs();
                    this.selectTab(result.tabButton, true);
                    resolve(true);
                } else {
                    resolve(false);
                }
            }).catch(() => resolve(true));
        });
    }

    /**
     * Get selected component
     * @returns {Promise<CdTabBarInterface>}
     */
    public getSelected() {
        return new Promise<CdTabBarInterface|null>((resolve) => {
            let activeFound = false;
            let index = 0;
            this.tabsButton.toArray().forEach((tabFn) => {
                if (tabFn.active === true) {
                    resolve({
                        num: index,
                        tabId: tabFn.tab ? tabFn.tab : null,
                        tabButton: tabFn
                    });
                    activeFound = true;
                }
                index++;
            });
            if (activeFound === false) {
                resolve(null);
            }
        });
    }

    /**
     * Get the tab according number, tab Id or CdTabButtonComponent
     * @param {number | string | CdTabButtonComponent} tabRef
     * @returns {Promise<CdTabBarInterface>}
     */
    public getTab(tabRef: number | string | CdTabButtonComponent) {
        return new Promise<CdTabBarInterface|null>((resolve) => {
            let tabFound = false;
            let index = 0;
            if (typeof tabRef === 'number') {
                const selectedIndex = tabRef as number;
                this.tabsButton.toArray().forEach((tabFn) => {
                    if (index === selectedIndex) {
                        resolve({
                            num: index,
                            tabId: tabFn.tab ? tabFn.tab : null,
                            tabButton: tabFn
                        });
                        tabFound = true;
                    }
                    index++;
                });
            } else if (typeof tabRef === 'string') {
                const selectedId = tabRef as string;
                this.tabsButton.toArray().forEach((tabFn) => {
                    if (tabFn.tab === selectedId) {
                        resolve({
                            num: index,
                            tabId: tabFn.tab,
                            tabButton: tabFn
                        });
                        tabFound = true;
                    }
                    index++;
                });
            } else if (tabRef instanceof CdTabButtonComponent) {
                resolve({
                    num: this.tabsButton.toArray().indexOf(tabRef),
                    tabId: tabRef.tab ? tabRef.tab : null,
                    tabButton: tabRef
                });
            }
            if (tabFound === false) {
                resolve(null);
            }
        });
    }

    /**
     * Select a tab
     * @param {CdTabButtonComponent} tabToSelect
     * @param {boolean} routing
     */
    private selectTab(tabToSelect: CdTabButtonComponent, routing = false) {
        // activate the tab title the user has clicked on.
        tabToSelect.selected = true;

        // if router link is defined, use router
        if (routing && tabToSelect.routerLink && tabToSelect.routerLink.length > 0) {
            this.router.navigate(tabToSelect.routerLink);
        }

        // notify the cd-tabs component for tab selection
        this.emitTabSelected(tabToSelect);
    }

    /**
     * Deactivate all tabs
     */
    private deactivateAllTabs() {
        this.tabsButton.toArray().forEach((tabFn) => tabFn.selected = false);
    }

    /**
     * Emit the event {tabSelectedEvent}
     * @param {CdTabButtonComponent} selectedTab
     */
    private emitTabSelected(selectedTab: CdTabButtonComponent) {
        this.tabSelectedEvent.emit({
            num: this.tabsButton.toArray().indexOf(selectedTab),
            tabId: selectedTab.tab ? selectedTab.tab : null,
            tabButton: selectedTab
        });
    }

    /**
     * Build the CSS class of cd-tab-bar
     */
    private buildCss() {
        let className = this.baseClass;

        if (this.colorValue) {
            className += 'ion-color ion-color-' + this.colorValue + ' ';
        }

        if (this.elt && this.elt.nativeElement) {
            this.elt.nativeElement.className = className;
        }
    }
}
