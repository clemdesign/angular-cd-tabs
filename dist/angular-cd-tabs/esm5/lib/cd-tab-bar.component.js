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
var CdTabBarComponent = /** @class */ (function () {
    function CdTabBarComponent(elt, router) {
        this.elt = elt;
        this.router = router;
        this.tabSelectedEvent = new EventEmitter();
        this.disposition = '';
        this.displayMode = 'default';
        this.baseClass = '';
    }
    Object.defineProperty(CdTabBarComponent.prototype, "buttons", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tabsButton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdTabBarComponent.prototype, "selected", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdTabBarComponent.prototype, "color", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.colorValue = value;
            this.buildCss();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdTabBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.active === undefined) {
            this.active = false;
        }
        if (this.elt && this.elt.nativeElement) {
            this.baseClass = this.elt.nativeElement.className;
        }
    };
    /**
     * @return {?}
     */
    CdTabBarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.selectMode === 'router') {
            // deactivate all tabs if router link defined
            this.tabsButton.toArray().forEach((/**
             * @param {?} tabFn
             * @return {?}
             */
            function (tabFn) {
                tabFn.active = false;
            }));
            // look for select tab according route
            this.router.events.subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                if (res instanceof NavigationEnd) {
                    /** @type {?} */
                    var relatedTabs = _this.tabsButton.filter((/**
                     * @param {?} tabFn
                     * @return {?}
                     */
                    function (tabFn) {
                        return (tabFn.routerLink.join('/').length > 3 && res.url.indexOf(tabFn.routerLink.join('/')) >= 0) ||
                            (tabFn.routerLink.join('/') === res.url);
                    }));
                    // decativate all tabs
                    _this.deactivateAllTabs();
                    // if related url found
                    if (relatedTabs.length > 0) {
                        _this.selectTab(relatedTabs[0]);
                    }
                }
            }));
        }
        else {
            // get all active tabs and not disabled
            /** @type {?} */
            var activeTabs = this.tabsButton.filter((/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) { return tab.active && !tab.disabled; }));
            // if there is no active tab set, activate the first
            if (activeTabs.length === 0) {
                // get all not disabled tabs
                /** @type {?} */
                var enabledTabs = this.tabsButton.filter((/**
                 * @param {?} tab
                 * @return {?}
                 */
                function (tab) { return !tab.disabled; }));
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
        function (tabFn) { return tabFn.buttonClick.subscribe((/**
         * @param {?} selectedTab
         * @return {?}
         */
        function (selectedTab) {
            // decativate all tabs
            _this.deactivateAllTabs();
            _this.selectTab(selectedTab, true);
        })); }));
    };
    /**
     * Select a tab according number, tab id or CdTabButtonComponent
     */
    /**
     * Select a tab according number, tab id or CdTabButtonComponent
     * @param {?} tab
     * @return {?}
     */
    CdTabBarComponent.prototype.select = /**
     * Select a tab according number, tab id or CdTabButtonComponent
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.getTab(tab).then((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                if (result !== null) {
                    _this.deactivateAllTabs();
                    _this.selectTab(result.tabButton, true);
                    resolve(true);
                }
                else {
                    resolve(false);
                }
            })).catch((/**
             * @return {?}
             */
            function () { return resolve(true); }));
        }));
    };
    /**
     * Get selected component
     */
    /**
     * Get selected component
     * @return {?}
     */
    CdTabBarComponent.prototype.getSelected = /**
     * Get selected component
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            /** @type {?} */
            var activeFound = false;
            /** @type {?} */
            var index = 0;
            _this.tabsButton.toArray().forEach((/**
             * @param {?} tabFn
             * @return {?}
             */
            function (tabFn) {
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
    };
    /**
     * Get the tab according number, tab Id or CdTabButtonComponent
     */
    /**
     * Get the tab according number, tab Id or CdTabButtonComponent
     * @param {?} tabRef
     * @return {?}
     */
    CdTabBarComponent.prototype.getTab = /**
     * Get the tab according number, tab Id or CdTabButtonComponent
     * @param {?} tabRef
     * @return {?}
     */
    function (tabRef) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            /** @type {?} */
            var tabFound = false;
            /** @type {?} */
            var index = 0;
            if (typeof tabRef === 'number') {
                /** @type {?} */
                var selectedIndex_1 = (/** @type {?} */ (tabRef));
                _this.tabsButton.toArray().forEach((/**
                 * @param {?} tabFn
                 * @return {?}
                 */
                function (tabFn) {
                    if (index === selectedIndex_1) {
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
                var selectedId_1 = (/** @type {?} */ (tabRef));
                _this.tabsButton.toArray().forEach((/**
                 * @param {?} tabFn
                 * @return {?}
                 */
                function (tabFn) {
                    if (tabFn.tab === selectedId_1) {
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
                    num: _this.tabsButton.toArray().indexOf(tabRef),
                    tabId: tabRef.tab ? tabRef.tab : null,
                    tabButton: tabRef
                });
            }
            if (tabFound === false) {
                resolve(null);
            }
        }));
    };
    /**
     * Select a tab
     */
    /**
     * Select a tab
     * @private
     * @param {?} tabToSelect
     * @param {?=} routing
     * @return {?}
     */
    CdTabBarComponent.prototype.selectTab = /**
     * Select a tab
     * @private
     * @param {?} tabToSelect
     * @param {?=} routing
     * @return {?}
     */
    function (tabToSelect, routing) {
        if (routing === void 0) { routing = false; }
        // activate the tab title the user has clicked on.
        tabToSelect.selected = true;
        // if router link is defined, use router
        if (routing && tabToSelect.routerLink && tabToSelect.routerLink.length > 0) {
            this.router.navigate(tabToSelect.routerLink);
        }
        // notify the cd-tabs component for tab selection
        this.emitTabSelected(tabToSelect);
    };
    /**
     * Deactivate all tabs
     */
    /**
     * Deactivate all tabs
     * @private
     * @return {?}
     */
    CdTabBarComponent.prototype.deactivateAllTabs = /**
     * Deactivate all tabs
     * @private
     * @return {?}
     */
    function () {
        this.tabsButton.toArray().forEach((/**
         * @param {?} tabFn
         * @return {?}
         */
        function (tabFn) { return tabFn.selected = false; }));
    };
    /**
     * Emit the event {tabSelectedEvent}
     */
    /**
     * Emit the event {tabSelectedEvent}
     * @private
     * @param {?} selectedTab
     * @return {?}
     */
    CdTabBarComponent.prototype.emitTabSelected = /**
     * Emit the event {tabSelectedEvent}
     * @private
     * @param {?} selectedTab
     * @return {?}
     */
    function (selectedTab) {
        this.tabSelectedEvent.emit({
            num: this.tabsButton.toArray().indexOf(selectedTab),
            tabId: selectedTab.tab ? selectedTab.tab : null,
            tabButton: selectedTab
        });
    };
    /**
     * Build the CSS class of cd-tab-bar
     */
    /**
     * Build the CSS class of cd-tab-bar
     * @private
     * @return {?}
     */
    CdTabBarComponent.prototype.buildCss = /**
     * Build the CSS class of cd-tab-bar
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var className = this.baseClass;
        if (this.colorValue) {
            className += 'ion-color ion-color-' + this.colorValue + ' ';
        }
        if (this.elt && this.elt.nativeElement) {
            this.elt.nativeElement.className = className;
        }
    };
    CdTabBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cd-tab-bar',
                    template: "\n      <div class=\"bar-container\"\n           [class.vertical]=\"disposition === 'vertical'\"\n           [class.align-center]=\"disposition === 'center'\"\n           [class.align-right]=\"disposition === 'right'\"\n           [class.segments]=\"displayMode === 'segments'\">\n        <ng-content></ng-content>\n      </div>",
                    styles: [".bar-container{--color:var(--cd-color, var(--ion-color-contrast, #333333));--color-selected:var(--cd-color-selected, var(--color));--color-hover:var(--cd-color-hover, var(--color));--background:var(--cd-background, var(--ion-color-base, #FFFFFF));--background-selected:var(--cd-background-selected, var(--ion-color-shade, #DDDDDD));--background-hover:var(--cd-background-hover, var(--ion-color-tint, #EEEEEE));--cd-tab-padding-v:0.6rem;--cd-tab-padding-h:0.5rem;--cd-tab-min-height:50px;--cd-tab-border:0;--cd-tab-border-radius:0;--cd-tab-max-width:168px;-webkit-box-flex:1;flex:1;-webkit-box-align:left;align-items:left;-webkit-box-pack:left;justify-content:left;display:-webkit-box;display:flex;position:relative;outline:0;background:var(--background)}.vertical{--cd-tab-max-width:100%;--cd-tab-padding-v:1rem;display:block;min-width:150px;margin-right:10px}.align-center{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.align-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.segments{--color:var(--cd-color, var(--ion-color-base, #333333));--color-selected:var(--cd-color-selected, var(--ion-color-contrast, #FFFFFF));--color-hover:var(--cd-color-hover, var(--color-selected));--background:var(--cd-background, var(--ion-color-contrast, #FFFFFF));--background-selected:var(--cd-background-selected, var(--ion-color-base, #DDDDDD));--background-hover:var(--cd-background-hover, var(--ion-color-tint, #EEEEEE));--cd-tab-padding-v:0.125rem;--cd-tab-padding-h:0.4rem;--cd-tab-min-height:1rem;--cd-tab-border:1px;--cd-tab-border-radius:5px}.segments cd-tab-button:first-child{border-radius:5px 0}"]
                }] }
    ];
    /** @nocollapse */
    CdTabBarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Router }
    ]; };
    CdTabBarComponent.propDecorators = {
        tabsButton: [{ type: ContentChildren, args: [CdTabButtonComponent,] }],
        tabSelectedEvent: [{ type: Output }],
        buttons: [{ type: Output }],
        disposition: [{ type: Input }],
        displayMode: [{ type: Input }],
        selected: [{ type: Input }],
        color: [{ type: Input }]
    };
    return CdTabBarComponent;
}());
export { CdTabBarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFiLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNkLXRhYnMvIiwic291cmNlcyI6WyJsaWIvY2QtdGFiLWJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQ3BELEtBQUssRUFBVSxNQUFNLEVBQ3JCLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUMsYUFBYSxFQUFFLE1BQU0sRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRXRELHVDQUlDOzs7SUFIRyxnQ0FBWTs7SUFDWixrQ0FBYzs7SUFDZCxzQ0FBZ0M7O0FBR3BDO0lBeUNJLDJCQUFvQixHQUFlLEVBQVUsTUFBYztRQUF2QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTFCakQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQXFCLENBQUM7UUFPMUQsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFnQmpDLGNBQVMsR0FBRyxFQUFFLENBQUM7SUFHZixDQUFDO0lBekJELHNCQUNJLHNDQUFPOzs7O1FBRFg7WUFFSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFDSSx1Q0FBUTs7Ozs7UUFEWixVQUNhLEtBQUs7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLG9DQUFLOzs7OztRQURULFVBQ1UsS0FBSztZQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7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OzBCQUVOLE1BQU07OEJBS04sS0FBSzs4QkFDTCxLQUFLOzJCQUVMLEtBQUs7d0JBS0wsS0FBSzs7SUErTVYsd0JBQUM7Q0FBQSxBQTdPRCxJQTZPQztTQWpPWSxpQkFBaUI7OztJQUMxQix1Q0FBbUY7O0lBRW5GLDZDQUFtRTs7SUFPbkUsd0NBQTBCOztJQUMxQix3Q0FBaUM7O0lBYWpDLG1DQUFnQjs7SUFDaEIsdUNBQW1COztJQUNuQix1Q0FBbUI7O0lBQ25CLHNDQUFlOzs7OztJQUVILGdDQUF1Qjs7Ozs7SUFBRSxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCwgT25Jbml0LCBPdXRwdXQsXG4gIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RUYWJCdXR0b25Db21wb25lbnR9IGZyb20gJy4vY2QtdGFiLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uRW5kLCBSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2RUYWJCYXJJbnRlcmZhY2Uge1xuICAgIG51bTogbnVtYmVyO1xuICAgIHRhYklkOiBzdHJpbmc7XG4gICAgdGFiQnV0dG9uOiBDZFRhYkJ1dHRvbkNvbXBvbmVudDtcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjZC10YWItYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cImJhci1jb250YWluZXJcIlxuICAgICAgICAgICBbY2xhc3MudmVydGljYWxdPVwiZGlzcG9zaXRpb24gPT09ICd2ZXJ0aWNhbCdcIlxuICAgICAgICAgICBbY2xhc3MuYWxpZ24tY2VudGVyXT1cImRpc3Bvc2l0aW9uID09PSAnY2VudGVyJ1wiXG4gICAgICAgICAgIFtjbGFzcy5hbGlnbi1yaWdodF09XCJkaXNwb3NpdGlvbiA9PT0gJ3JpZ2h0J1wiXG4gICAgICAgICAgIFtjbGFzcy5zZWdtZW50c109XCJkaXNwbGF5TW9kZSA9PT0gJ3NlZ21lbnRzJ1wiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlVXJsczogWycuL2NkLXRhYi1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZFRhYkJhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihDZFRhYkJ1dHRvbkNvbXBvbmVudCkgdGFic0J1dHRvbjogUXVlcnlMaXN0PENkVGFiQnV0dG9uQ29tcG9uZW50PjtcblxuICAgIEBPdXRwdXQoKSB0YWJTZWxlY3RlZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDZFRhYkJhckludGVyZmFjZT4oKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIGdldCBidXR0b25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJzQnV0dG9uO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIGRpc3Bvc2l0aW9uID0gJyc7XG4gICAgQElucHV0KCkgZGlzcGxheU1vZGUgPSAnZGVmYXVsdCc7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGNvbG9yKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29sb3JWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmJ1aWxkQ3NzKCk7XG4gICAgfVxuXG4gICAgYWN0aXZlOiBib29sZWFuO1xuICAgIGNvbG9yVmFsdWU6IHN0cmluZztcbiAgICBzZWxlY3RNb2RlOiBzdHJpbmc7XG4gICAgYmFzZUNsYXNzID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsdDogRWxlbWVudFJlZiwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbHQgJiYgdGhpcy5lbHQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlQ2xhc3MgPSB0aGlzLmVsdC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0TW9kZSA9PT0gJ3JvdXRlcicpIHtcbiAgICAgICAgICAgIC8vIGRlYWN0aXZhdGUgYWxsIHRhYnMgaWYgcm91dGVyIGxpbmsgZGVmaW5lZFxuICAgICAgICAgICAgdGhpcy50YWJzQnV0dG9uLnRvQXJyYXkoKS5mb3JFYWNoKCh0YWJGbikgPT4ge1xuICAgICAgICAgICAgICAgIHRhYkZuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGxvb2sgZm9yIHNlbGVjdCB0YWIgYWNjb3JkaW5nIHJvdXRlXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzIGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVGFicyA9IHRoaXMudGFic0J1dHRvbi5maWx0ZXIoKHRhYkZuKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhYkZuLnJvdXRlckxpbmsuam9pbignLycpLmxlbmd0aCA+IDMgJiYgcmVzLnVybC5pbmRleE9mKHRhYkZuLnJvdXRlckxpbmsuam9pbignLycpKSA+PSAwKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhYkZuLnJvdXRlckxpbmsuam9pbignLycpID09PSByZXMudXJsKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gZGVjYXRpdmF0ZSBhbGwgdGFic1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYWN0aXZhdGVBbGxUYWJzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgcmVsYXRlZCB1cmwgZm91bmRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbGF0ZWRUYWJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKHJlbGF0ZWRUYWJzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gZ2V0IGFsbCBhY3RpdmUgdGFicyBhbmQgbm90IGRpc2FibGVkXG4gICAgICAgICAgICBjb25zdCBhY3RpdmVUYWJzID0gdGhpcy50YWJzQnV0dG9uLmZpbHRlcigodGFiKSA9PiB0YWIuYWN0aXZlICYmICF0YWIuZGlzYWJsZWQpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBhY3RpdmUgdGFiIHNldCwgYWN0aXZhdGUgdGhlIGZpcnN0XG4gICAgICAgICAgICBpZiAoYWN0aXZlVGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgYWxsIG5vdCBkaXNhYmxlZCB0YWJzXG4gICAgICAgICAgICAgICAgY29uc3QgZW5hYmxlZFRhYnMgPSB0aGlzLnRhYnNCdXR0b24uZmlsdGVyKCh0YWIpID0+ICF0YWIuZGlzYWJsZWQpO1xuICAgICAgICAgICAgICAgIGlmIChlbmFibGVkVGFicy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKGVuYWJsZWRUYWJzWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VGFiKGFjdGl2ZVRhYnNbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXZlbnRcbiAgICAgICAgdGhpcy50YWJzQnV0dG9uLnRvQXJyYXkoKS5mb3JFYWNoKCh0YWJGbikgPT4gdGFiRm4uYnV0dG9uQ2xpY2suc3Vic2NyaWJlKChzZWxlY3RlZFRhYikgPT4ge1xuICAgICAgICAgICAgLy8gZGVjYXRpdmF0ZSBhbGwgdGFic1xuICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlQWxsVGFicygpO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFRhYihzZWxlY3RlZFRhYiwgdHJ1ZSk7XG4gICAgICAgIH0pKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhIHRhYiBhY2NvcmRpbmcgbnVtYmVyLCB0YWIgaWQgb3IgQ2RUYWJCdXR0b25Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0KHRhYjogbnVtYmVyIHwgc3RyaW5nIHwgQ2RUYWJCdXR0b25Db21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmdldFRhYih0YWIpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWFjdGl2YXRlQWxsVGFicygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdFRhYihyZXN1bHQudGFiQnV0dG9uLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiByZXNvbHZlKHRydWUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHNlbGVjdGVkIGNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPENkVGFiQmFySW50ZXJmYWNlfG51bGw+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0aXZlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLnRhYnNCdXR0b24udG9BcnJheSgpLmZvckVhY2goKHRhYkZuKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYkZuLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJZDogdGFiRm4udGFiID8gdGFiRm4udGFiIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbjogdGFiRm5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZUZvdW5kID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdGFiIGFjY29yZGluZyBudW1iZXIsIHRhYiBJZCBvciBDZFRhYkJ1dHRvbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUYWIodGFiUmVmOiBudW1iZXIgfCBzdHJpbmcgfCBDZFRhYkJ1dHRvbkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Q2RUYWJCYXJJbnRlcmZhY2V8bnVsbD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YWJGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFiUmVmID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSB0YWJSZWYgYXMgbnVtYmVyO1xuICAgICAgICAgICAgICAgIHRoaXMudGFic0J1dHRvbi50b0FycmF5KCkuZm9yRWFjaCgodGFiRm4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSBzZWxlY3RlZEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYklkOiB0YWJGbi50YWIgPyB0YWJGbi50YWIgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbjogdGFiRm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFiRm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB0YWJSZWYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJZCA9IHRhYlJlZiBhcyBzdHJpbmc7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJzQnV0dG9uLnRvQXJyYXkoKS5mb3JFYWNoKCh0YWJGbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFiRm4udGFiID09PSBzZWxlY3RlZElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYklkOiB0YWJGbi50YWIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uOiB0YWJGblxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFiUmVmIGluc3RhbmNlb2YgQ2RUYWJCdXR0b25Db21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgbnVtOiB0aGlzLnRhYnNCdXR0b24udG9BcnJheSgpLmluZGV4T2YodGFiUmVmKSxcbiAgICAgICAgICAgICAgICAgICAgdGFiSWQ6IHRhYlJlZi50YWIgPyB0YWJSZWYudGFiIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uOiB0YWJSZWZcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YWJGb3VuZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYSB0YWJcbiAgICAgKi9cbiAgICBwcml2YXRlIHNlbGVjdFRhYih0YWJUb1NlbGVjdDogQ2RUYWJCdXR0b25Db21wb25lbnQsIHJvdXRpbmcgPSBmYWxzZSkge1xuICAgICAgICAvLyBhY3RpdmF0ZSB0aGUgdGFiIHRpdGxlIHRoZSB1c2VyIGhhcyBjbGlja2VkIG9uLlxuICAgICAgICB0YWJUb1NlbGVjdC5zZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gaWYgcm91dGVyIGxpbmsgaXMgZGVmaW5lZCwgdXNlIHJvdXRlclxuICAgICAgICBpZiAocm91dGluZyAmJiB0YWJUb1NlbGVjdC5yb3V0ZXJMaW5rICYmIHRhYlRvU2VsZWN0LnJvdXRlckxpbmsubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUodGFiVG9TZWxlY3Qucm91dGVyTGluayk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub3RpZnkgdGhlIGNkLXRhYnMgY29tcG9uZW50IGZvciB0YWIgc2VsZWN0aW9uXG4gICAgICAgIHRoaXMuZW1pdFRhYlNlbGVjdGVkKHRhYlRvU2VsZWN0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWFjdGl2YXRlIGFsbCB0YWJzXG4gICAgICovXG4gICAgcHJpdmF0ZSBkZWFjdGl2YXRlQWxsVGFicygpIHtcbiAgICAgICAgdGhpcy50YWJzQnV0dG9uLnRvQXJyYXkoKS5mb3JFYWNoKCh0YWJGbikgPT4gdGFiRm4uc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdCB0aGUgZXZlbnQge3RhYlNlbGVjdGVkRXZlbnR9XG4gICAgICovXG4gICAgcHJpdmF0ZSBlbWl0VGFiU2VsZWN0ZWQoc2VsZWN0ZWRUYWI6IENkVGFiQnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMudGFiU2VsZWN0ZWRFdmVudC5lbWl0KHtcbiAgICAgICAgICAgIG51bTogdGhpcy50YWJzQnV0dG9uLnRvQXJyYXkoKS5pbmRleE9mKHNlbGVjdGVkVGFiKSxcbiAgICAgICAgICAgIHRhYklkOiBzZWxlY3RlZFRhYi50YWIgPyBzZWxlY3RlZFRhYi50YWIgOiBudWxsLFxuICAgICAgICAgICAgdGFiQnV0dG9uOiBzZWxlY3RlZFRhYlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgQ1NTIGNsYXNzIG9mIGNkLXRhYi1iYXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkQ3NzKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5iYXNlQ2xhc3M7XG5cbiAgICAgICAgaWYgKHRoaXMuY29sb3JWYWx1ZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICdpb24tY29sb3IgaW9uLWNvbG9yLScgKyB0aGlzLmNvbG9yVmFsdWUgKyAnICc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbHQgJiYgdGhpcy5lbHQubmF0aXZlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5lbHQubmF0aXZlRWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=