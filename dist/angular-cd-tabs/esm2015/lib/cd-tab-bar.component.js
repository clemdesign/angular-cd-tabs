/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { CdTabButtonComponent } from './cd-tab-button.component';
import { NavigationEnd, Router } from '@angular/router';
/**
 * @record
 */
export function CdTabBarInterface() { }
if (false) {
    /** @type {?} */
    CdTabBarInterface.prototype.num;
    /** @type {?} */
    CdTabBarInterface.prototype.tabId;
    /** @type {?} */
    CdTabBarInterface.prototype.tabButton;
}
export class CdTabBarComponent {
    /**
     * @param {?} elt
     * @param {?} router
     */
    constructor(elt, router) {
        this.elt = elt;
        this.router = router;
        this.tabSelectedEvent = new EventEmitter();
        this.disposition = '';
        this.displayMode = 'default';
        this.baseClass = '';
    }
    /**
     * @return {?}
     */
    get buttons() {
        return this.tabsButton;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this.active = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this.colorValue = value;
        this.buildCss();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.active === undefined) {
            this.active = false;
        }
        if (this.elt && this.elt.nativeElement) {
            this.baseClass = this.elt.nativeElement.className;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.selectMode === 'router') {
            // deactivate all tabs if router link defined
            this.tabsButton.toArray().forEach((/**
             * @param {?} tabFn
             * @return {?}
             */
            (tabFn) => {
                tabFn.active = false;
            }));
            // look for select tab according route
            this.router.events.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                if (res instanceof NavigationEnd) {
                    /** @type {?} */
                    const relatedTabs = this.tabsButton.filter((/**
                     * @param {?} tabFn
                     * @return {?}
                     */
                    (tabFn) => (tabFn.routerLink.join('/').length > 3 && res.url.indexOf(tabFn.routerLink.join('/')) >= 0) ||
                        (tabFn.routerLink.join('/') === res.url)));
                    // decativate all tabs
                    this.deactivateAllTabs();
                    // if related url found
                    if (relatedTabs.length > 0) {
                        this.selectTab(relatedTabs[0]);
                    }
                }
            }));
        }
        else {
            // get all active tabs and not disabled
            /** @type {?} */
            const activeTabs = this.tabsButton.filter((/**
             * @param {?} tab
             * @return {?}
             */
            (tab) => tab.active && !tab.disabled));
            // if there is no active tab set, activate the first
            if (activeTabs.length === 0) {
                // get all not disabled tabs
                /** @type {?} */
                const enabledTabs = this.tabsButton.filter((/**
                 * @param {?} tab
                 * @return {?}
                 */
                (tab) => !tab.disabled));
                if (enabledTabs.length > 0) {
                    this.selectTab(enabledTabs[0]);
                }
            }
            else {
                this.selectTab(activeTabs[0]);
            }
        }
        // event
        this.tabsButton.toArray().forEach((/**
         * @param {?} tabFn
         * @return {?}
         */
        (tabFn) => tabFn.buttonClick.subscribe((/**
         * @param {?} selectedTab
         * @return {?}
         */
        (selectedTab) => {
            // decativate all tabs
            this.deactivateAllTabs();
            this.selectTab(selectedTab, true);
        }))));
    }
    /**
     * Select a tab according number, tab id or CdTabButtonComponent
     * @param {?} tab
     * @return {?}
     */
    select(tab) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            this.getTab(tab).then((/**
             * @param {?} result
             * @return {?}
             */
            (result) => {
                if (result !== null) {
                    this.deactivateAllTabs();
                    this.selectTab(result.tabButton, true);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            })).catch((/**
             * @return {?}
             */
            () => resolve(true)));
        }));
    }
    /**
     * Get selected component
     * @return {?}
     */
    getSelected() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            /** @type {?} */
            let activeFound = false;
            /** @type {?} */
            let index = 0;
            this.tabsButton.toArray().forEach((/**
             * @param {?} tabFn
             * @return {?}
             */
            (tabFn) => {
                if (tabFn.active === true) {
                    resolve({
                        num: index,
                        tabId: tabFn.tab ? tabFn.tab : null,
                        tabButton: tabFn
                    });
                    activeFound = true;
                }
                index++;
            }));
            if (activeFound === false) {
                resolve(null);
            }
        }));
    }
    /**
     * Get the tab according number, tab Id or CdTabButtonComponent
     * @param {?} tabRef
     * @return {?}
     */
    getTab(tabRef) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            /** @type {?} */
            let tabFound = false;
            /** @type {?} */
            let index = 0;
            if (typeof tabRef === 'number') {
                /** @type {?} */
                const selectedIndex = (/** @type {?} */ (tabRef));
                this.tabsButton.toArray().forEach((/**
                 * @param {?} tabFn
                 * @return {?}
                 */
                (tabFn) => {
                    if (index === selectedIndex) {
                        resolve({
                            num: index,
                            tabId: tabFn.tab ? tabFn.tab : null,
                            tabButton: tabFn
                        });
                        tabFound = true;
                    }
                    index++;
                }));
            }
            else if (typeof tabRef === 'string') {
                /** @type {?} */
                const selectedId = (/** @type {?} */ (tabRef));
                this.tabsButton.toArray().forEach((/**
                 * @param {?} tabFn
                 * @return {?}
                 */
                (tabFn) => {
                    if (tabFn.tab === selectedId) {
                        resolve({
                            num: index,
                            tabId: tabFn.tab,
                            tabButton: tabFn
                        });
                        tabFound = true;
                    }
                    index++;
                }));
            }
            else if (tabRef instanceof CdTabButtonComponent) {
                resolve({
                    num: this.tabsButton.toArray().indexOf(tabRef),
                    tabId: tabRef.tab ? tabRef.tab : null,
                    tabButton: tabRef
                });
            }
            if (tabFound === false) {
                resolve(null);
            }
        }));
    }
    /**
     * Select a tab
     * @private
     * @param {?} tabToSelect
     * @param {?=} routing
     * @return {?}
     */
    selectTab(tabToSelect, routing = false) {
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
     * @private
     * @return {?}
     */
    deactivateAllTabs() {
        this.tabsButton.toArray().forEach((/**
         * @param {?} tabFn
         * @return {?}
         */
        (tabFn) => tabFn.selected = false));
    }
    /**
     * Emit the event {tabSelectedEvent}
     * @private
     * @param {?} selectedTab
     * @return {?}
     */
    emitTabSelected(selectedTab) {
        this.tabSelectedEvent.emit({
            num: this.tabsButton.toArray().indexOf(selectedTab),
            tabId: selectedTab.tab ? selectedTab.tab : null,
            tabButton: selectedTab
        });
    }
    /**
     * Build the CSS class of cd-tab-bar
     * @private
     * @return {?}
     */
    buildCss() {
        /** @type {?} */
        let className = this.baseClass;
        if (this.colorValue) {
            className += 'ion-color ion-color-' + this.colorValue + ' ';
        }
        if (this.elt && this.elt.nativeElement) {
            this.elt.nativeElement.className = className;
        }
    }
}
CdTabBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'cd-tab-bar',
                template: `
      <div class="bar-container"
           [class.vertical]="disposition === 'vertical'"
           [class.align-center]="disposition === 'center'"
           [class.align-right]="disposition === 'right'"
           [class.segments]="displayMode === 'segments'">
        <ng-content></ng-content>
      </div>`,
                styles: [".bar-container{--color:var(--cd-color, var(--ion-color-contrast, #333333));--color-selected:var(--cd-color-selected, var(--color));--color-hover:var(--cd-color-hover, var(--color));--background:var(--cd-background, var(--ion-color-base, #FFFFFF));--background-selected:var(--cd-background-selected, var(--ion-color-shade, #DDDDDD));--background-hover:var(--cd-background-hover, var(--ion-color-tint, #EEEEEE));--cd-tab-padding-v:0.6rem;--cd-tab-padding-h:0.5rem;--cd-tab-min-height:50px;--cd-tab-border:0;--cd-tab-border-radius:0;--cd-tab-max-width:168px;-webkit-box-flex:1;flex:1;-webkit-box-align:left;align-items:left;-webkit-box-pack:left;justify-content:left;display:-webkit-box;display:flex;position:relative;outline:0;background:var(--background)}.vertical{--cd-tab-max-width:100%;--cd-tab-padding-v:1rem;display:block;min-width:150px;margin-right:10px}.align-center{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.align-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.segments{--color:var(--cd-color, var(--ion-color-base, #333333));--color-selected:var(--cd-color-selected, var(--ion-color-contrast, #FFFFFF));--color-hover:var(--cd-color-hover, var(--color-selected));--background:var(--cd-background, var(--ion-color-contrast, #FFFFFF));--background-selected:var(--cd-background-selected, var(--ion-color-base, #DDDDDD));--background-hover:var(--cd-background-hover, var(--ion-color-tint, #EEEEEE));--cd-tab-padding-v:0.125rem;--cd-tab-padding-h:0.4rem;--cd-tab-min-height:1rem;--cd-tab-border:1px;--cd-tab-border-radius:5px}.segments cd-tab-button:first-child{border-radius:5px 0}"]
            }] }
];
/** @nocollapse */
CdTabBarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Router }
];
CdTabBarComponent.propDecorators = {
    tabsButton: [{ type: ContentChildren, args: [CdTabButtonComponent,] }],
    tabSelectedEvent: [{ type: Output }],
    buttons: [{ type: Output }],
    disposition: [{ type: Input }],
    displayMode: [{ type: Input }],
    selected: [{ type: Input }],
    color: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CdTabBarComponent.prototype.tabsButton;
    /** @type {?} */
    CdTabBarComponent.prototype.tabSelectedEvent;
    /** @type {?} */
    CdTabBarComponent.prototype.disposition;
    /** @type {?} */
    CdTabBarComponent.prototype.displayMode;
    /** @type {?} */
    CdTabBarComponent.prototype.active;
    /** @type {?} */
    CdTabBarComponent.prototype.colorValue;
    /** @type {?} */
    CdTabBarComponent.prototype.selectMode;
    /** @type {?} */
    CdTabBarComponent.prototype.baseClass;
    /**
     * @type {?}
     * @private
     */
    CdTabBarComponent.prototype.elt;
    /**
     * @type {?}
     * @private
     */
    CdTabBarComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFiLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNkLXRhYnMvIiwic291cmNlcyI6WyJsaWIvY2QtdGFiLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQ3BELEtBQUssRUFBVSxNQUFNLEVBQ3JCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRXRELHVDQUlDOzs7SUFIRyxnQ0FBWTs7SUFDWixrQ0FBYzs7SUFDZCxzQ0FBZ0M7O0FBZXBDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBNkIxQixZQUFvQixHQUFlLEVBQVUsTUFBYztRQUF2QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTFCakQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFPMUQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFnQmpDLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFHZixDQUFDOzs7O0lBekJELElBQ0ksT0FBTztRQUNQLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUtELElBQ0ksUUFBUSxDQUFDLEtBQUs7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELElBQ0ksS0FBSyxDQUFDLEtBQUs7UUFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQVVELFFBQVE7UUFD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QUFFLG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsXG4gIElucHV0LCBPbkluaXQsIE91dHB1dCxcbiAgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZFRhYkJ1dHRvbkNvbXBvbmVudH0gZnJvbSAnLi9jZC10YWItYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQge05hdmlnYXRpb25FbmQsIFJvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBDZFRhYkJhckludGVyZmFjZSB7XG4gICAgbnVtOiBudW1iZXI7XG4gICAgdGFiSWQ6IHN0cmluZztcbiAgICB0YWJCdXR0b246IENkVGFiQnV0dG9uQ29tcG9uZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NkLXRhYi1iYXInLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFyLWNvbnRhaW5lclwiXG4gICAgICAgICAgIFtjbGFzcy52ZXJ0aWNhbF09XCJkaXNwb3NpdGlvbiA9PT0gJ3ZlcnRpY2FsJ1wiXG4gICAgICAgICAgIFtjbGFzcy5hbGlnbi1jZW50ZXJdPVwiZGlzcG9zaXRpb24gPT09ICdjZW50ZXInXCJcbiAgICAgICAgICAgW2NsYXNzLmFsaWduLXJpZ2h0XT1cImRpc3Bvc2l0aW9uID09PSAncmlnaHQnXCJcbiAgICAgICAgICAgW2NsYXNzLnNlZ21lbnRzXT1cImRpc3BsYXlNb2RlID09PSAnc2VnbWVudHMnXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2QtdGFiLWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENkVGFiQmFyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgICBAQ29udGVudENoaWxkcmVuKENkVGFiQnV0dG9uQ29tcG9uZW50KSB0YWJzQnV0dG9uOiBRdWVyeUxpc3Q8Q2RUYWJCdXR0b25Db21wb25lbnQ+O1xuXG4gICAgQE91dHB1dCgpIHRhYlNlbGVjdGVkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENkVGFiQmFySW50ZXJmYWNlPigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgZ2V0IGJ1dHRvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYnNCdXR0b247XG4gICAgfVxuXG4gICAgQElucHV0KCkgZGlzcG9zaXRpb24gPSAnJztcbiAgICBASW5wdXQoKSBkaXNwbGF5TW9kZSA9ICdkZWZhdWx0JztcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHNlbGVjdGVkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgY29sb3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb2xvclZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYnVpbGRDc3MoKTtcbiAgICB9XG5cbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgY29sb3JWYWx1ZTogc3RyaW5nO1xuICAgIHNlbGVjdE1vZGU6IHN0cmluZztcbiAgICBiYXNlQ2xhc3MgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWx0OiBFbGVtZW50UmVmLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsdCAmJiB0aGlzLmVsdC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmJhc2VDbGFzcyA9IHRoaXMuZWx0Lm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RNb2RlID09PSAncm91dGVyJykge1xuICAgICAgICAgICAgLy8gZGVhY3RpdmF0ZSBhbGwgdGFicyBpZiByb3V0ZXIgbGluayBkZWZpbmVkXG4gICAgICAgICAgICB0aGlzLnRhYnNCdXR0b24udG9BcnJheSgpLmZvckVhY2goKHRhYkZuKSA9PiB7XG4gICAgICAgICAgICAgICAgdGFiRm4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gbG9vayBmb3Igc2VsZWN0IHRhYiBhY2NvcmRpbmcgcm91dGVcbiAgICAgICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbGF0ZWRUYWJzID0gdGhpcy50YWJzQnV0dG9uLmZpbHRlcigodGFiRm4pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAodGFiRm4ucm91dGVyTGluay5qb2luKCcvJykubGVuZ3RoID4gMyAmJiByZXMudXJsLmluZGV4T2YodGFiRm4ucm91dGVyTGluay5qb2luKCcvJykpID49IDApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAodGFiRm4ucm91dGVyTGluay5qb2luKCcvJykgPT09IHJlcy51cmwpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBkZWNhdGl2YXRlIGFsbCB0YWJzXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZUFsbFRhYnMoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiByZWxhdGVkIHVybCBmb3VuZFxuICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRlZFRhYnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWIocmVsYXRlZFRhYnNbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBnZXQgYWxsIGFjdGl2ZSB0YWJzIGFuZCBub3QgZGlzYWJsZWRcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVRhYnMgPSB0aGlzLnRhYnNCdXR0b24uZmlsdGVyKCh0YWIpID0+IHRhYi5hY3RpdmUgJiYgIXRhYi5kaXNhYmxlZCk7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIGFjdGl2ZSB0YWIgc2V0LCBhY3RpdmF0ZSB0aGUgZmlyc3RcbiAgICAgICAgICAgIGlmIChhY3RpdmVUYWJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGdldCBhbGwgbm90IGRpc2FibGVkIHRhYnNcbiAgICAgICAgICAgICAgICBjb25zdCBlbmFibGVkVGFicyA9IHRoaXMudGFic0J1dHRvbi5maWx0ZXIoKHRhYikgPT4gIXRhYi5kaXNhYmxlZCk7XG4gICAgICAgICAgICAgICAgaWYgKGVuYWJsZWRUYWJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWIoZW5hYmxlZFRhYnNbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWIoYWN0aXZlVGFic1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBldmVudFxuICAgICAgICB0aGlzLnRhYnNCdXR0b24udG9BcnJheSgpLmZvckVhY2goKHRhYkZuKSA9PiB0YWJGbi5idXR0b25DbGljay5zdWJzY3JpYmUoKHNlbGVjdGVkVGFiKSA9PiB7XG4gICAgICAgICAgICAvLyBkZWNhdGl2YXRlIGFsbCB0YWJzXG4gICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVBbGxUYWJzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKHNlbGVjdGVkVGFiLCB0cnVlKTtcbiAgICAgICAgfSkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGEgdGFiIGFjY29yZGluZyBudW1iZXIsIHRhYiBpZCBvciBDZFRhYkJ1dHRvbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QodGFiOiBudW1iZXIgfCBzdHJpbmcgfCBDZFRhYkJ1dHRvbkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGFiKHRhYikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVBbGxUYWJzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKHJlc3VsdC50YWJCdXR0b24sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHJlc29sdmUodHJ1ZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VsZWN0ZWQgY29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldFNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Q2RUYWJCYXJJbnRlcmZhY2V8bnVsbD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCBhY3RpdmVGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgIHRoaXMudGFic0J1dHRvbi50b0FycmF5KCkuZm9yRWFjaCgodGFiRm4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGFiRm4uYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYklkOiB0YWJGbi50YWIgPyB0YWJGbi50YWIgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uOiB0YWJGblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoYWN0aXZlRm91bmQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB0YWIgYWNjb3JkaW5nIG51bWJlciwgdGFiIElkIG9yIENkVGFiQnV0dG9uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldFRhYih0YWJSZWY6IG51bWJlciB8IHN0cmluZyB8IENkVGFiQnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxDZFRhYkJhckludGVyZmFjZXxudWxsPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhYkZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YWJSZWYgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRhYlJlZiBhcyBudW1iZXI7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzQnV0dG9uLnRvQXJyYXkoKS5mb3JFYWNoKCh0YWJGbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHNlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSWQ6IHRhYkZuLnRhYiA/IHRhYkZuLnRhYiA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uOiB0YWJGblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRhYlJlZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZElkID0gdGFiUmVmIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICB0aGlzLnRhYnNCdXR0b24udG9BcnJheSgpLmZvckVhY2goKHRhYkZuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJGbi50YWIgPT09IHNlbGVjdGVkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSWQ6IHRhYkZuLnRhYixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b246IHRhYkZuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YWJSZWYgaW5zdGFuY2VvZiBDZFRhYkJ1dHRvbkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBudW06IHRoaXMudGFic0J1dHRvbi50b0FycmF5KCkuaW5kZXhPZih0YWJSZWYpLFxuICAgICAgICAgICAgICAgICAgICB0YWJJZDogdGFiUmVmLnRhYiA/IHRhYlJlZi50YWIgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b246IHRhYlJlZlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhYkZvdW5kID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhIHRhYlxuICAgICAqL1xuICAgIHByaXZhdGUgc2VsZWN0VGFiKHRhYlRvU2VsZWN0OiBDZFRhYkJ1dHRvbkNvbXBvbmVudCwgcm91dGluZyA9IGZhbHNlKSB7XG4gICAgICAgIC8vIGFjdGl2YXRlIHRoZSB0YWIgdGl0bGUgdGhlIHVzZXIgaGFzIGNsaWNrZWQgb24uXG4gICAgICAgIHRhYlRvU2VsZWN0LnNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBpZiByb3V0ZXIgbGluayBpcyBkZWZpbmVkLCB1c2Ugcm91dGVyXG4gICAgICAgIGlmIChyb3V0aW5nICYmIHRhYlRvU2VsZWN0LnJvdXRlckxpbmsgJiYgdGFiVG9TZWxlY3Qucm91dGVyTGluay5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZSh0YWJUb1NlbGVjdC5yb3V0ZXJMaW5rKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG5vdGlmeSB0aGUgY2QtdGFicyBjb21wb25lbnQgZm9yIHRhYiBzZWxlY3Rpb25cbiAgICAgICAgdGhpcy5lbWl0VGFiU2VsZWN0ZWQodGFiVG9TZWxlY3QpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGUgYWxsIHRhYnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGRlYWN0aXZhdGVBbGxUYWJzKCkge1xuICAgICAgICB0aGlzLnRhYnNCdXR0b24udG9BcnJheSgpLmZvckVhY2goKHRhYkZuKSA9PiB0YWJGbi5zZWxlY3RlZCA9IGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbWl0IHRoZSBldmVudCB7dGFiU2VsZWN0ZWRFdmVudH1cbiAgICAgKi9cbiAgICBwcml2YXRlIGVtaXRUYWJTZWxlY3RlZChzZWxlY3RlZFRhYjogQ2RUYWJCdXR0b25Db21wb25lbnQpIHtcbiAgICAgICAgdGhpcy50YWJTZWxlY3RlZEV2ZW50LmVtaXQoe1xuICAgICAgICAgICAgbnVtOiB0aGlzLnRhYnNCdXR0b24udG9BcnJheSgpLmluZGV4T2Yoc2VsZWN0ZWRUYWIpLFxuICAgICAgICAgICAgdGFiSWQ6IHNlbGVjdGVkVGFiLnRhYiA/IHNlbGVjdGVkVGFiLnRhYiA6IG51bGwsXG4gICAgICAgICAgICB0YWJCdXR0b246IHNlbGVjdGVkVGFiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHRoZSBDU1MgY2xhc3Mgb2YgY2QtdGFiLWJhclxuICAgICAqL1xuICAgIHByaXZhdGUgYnVpbGRDc3MoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLmJhc2VDbGFzcztcblxuICAgICAgICBpZiAodGhpcy5jb2xvclZhbHVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJ2lvbi1jb2xvciBpb24tY29sb3ItJyArIHRoaXMuY29sb3JWYWx1ZSArICcgJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVsdCAmJiB0aGlzLmVsdC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsdC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==