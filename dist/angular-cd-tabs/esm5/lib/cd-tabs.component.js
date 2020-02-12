/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { CdTabBarComponent } from './cd-tab-bar.component';
import { CdTabContentComponent } from './cd-tab-content.component';
/**
 * @record
 */
export function CdTabInterface() { }
if (false) {
    /** @type {?|undefined} */
    CdTabInterface.prototype.tabContent;
}
var CdTabsComponent = /** @class */ (function () {
    function CdTabsComponent() {
        this.tabChangedEvent = new EventEmitter();
        this.selectMode = 'config';
        this.displayMode = 'default';
        this.disposition = '';
    }
    /**
     * @return {?}
     */
    CdTabsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.tabBar.tabSelectedEvent.subscribe((/**
         * @param {?} tabData
         * @return {?}
         */
        function (tabData) { return _this.activeTabContent(tabData); }));
        this.tabBar.selectMode = this.selectMode;
        this.tabBar.displayMode = this.displayMode;
        this.tabBar.disposition = this.disposition;
    };
    /**
     * Select a tab according num, tab id or CdTabButtonComponent
     */
    /**
     * Select a tab according num, tab id or CdTabButtonComponent
     * @param {?} tab
     * @return {?}
     */
    CdTabsComponent.prototype.select = /**
     * Select a tab according num, tab id or CdTabButtonComponent
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
            if (_this.tabBar) {
                _this.tabBar.select(tab)
                    .then((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) { return resolve(result); }))
                    .catch((/**
                 * @return {?}
                 */
                function () { return resolve(false); }));
            }
            else {
                resolve(false);
            }
        }));
    };
    /**
     * Get selected tab
     */
    /**
     * Get selected tab
     * @return {?}
     */
    CdTabsComponent.prototype.getSelected = /**
     * Get selected tab
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (_this.tabBar) {
                _this.tabBar.getSelected().then((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    if (result !== null) {
                        resolve({
                            num: result.num,
                            tabId: result.tabId,
                            tabButton: result.tabButton,
                            tabContent: _this.getActivatedTabContent()
                        });
                    }
                    else {
                        resolve(null);
                    }
                })).catch((/**
                 * @return {?}
                 */
                function () { return resolve(null); }));
            }
            else {
                resolve(null);
            }
        }));
    };
    /**
     * Get a tab according number, tab id or CdTabButtonComponent
     */
    /**
     * Get a tab according number, tab id or CdTabButtonComponent
     * @param {?} tab
     * @return {?}
     */
    CdTabsComponent.prototype.getTab = /**
     * Get a tab according number, tab id or CdTabButtonComponent
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
            if (_this.tabBar) {
                _this.tabBar.getTab(tab).then((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) {
                    if (result !== null) {
                        resolve({
                            num: result.num,
                            tabId: result.tabId,
                            tabButton: result.tabButton,
                            tabContent: _this.getActivatedTabContent()
                        });
                    }
                    else {
                        resolve(null);
                    }
                })).catch((/**
                 * @return {?}
                 */
                function () { return resolve(null); }));
            }
            else {
                resolve(null);
            }
        }));
    };
    /**
     * Ge the activated tab content
     */
    /**
     * Ge the activated tab content
     * @private
     * @return {?}
     */
    CdTabsComponent.prototype.getActivatedTabContent = /**
     * Ge the activated tab content
     * @private
     * @return {?}
     */
    function () {
        this.tabsContent.toArray().forEach((/**
         * @param {?} tabFn
         * @return {?}
         */
        function (tabFn) {
            if (tabFn.activeState === true) {
                return tabFn;
            }
        }));
        return null;
    };
    /**
     * Active the tab content
     */
    /**
     * Active the tab content
     * @private
     * @param {?} tabData
     * @return {?}
     */
    CdTabsComponent.prototype.activeTabContent = /**
     * Active the tab content
     * @private
     * @param {?} tabData
     * @return {?}
     */
    function (tabData) {
        var _this = this;
        /** @type {?} */
        var index = 0;
        this.tabsContent.toArray().forEach((/**
         * @param {?} tabFn
         * @return {?}
         */
        function (tabFn) {
            tabFn.active = false;
            if (tabData.tabId) {
                if (tabData.tabId === tabFn.id) {
                    tabFn.active = true;
                    _this.emitTabChanged(tabData, tabFn);
                }
            }
            else {
                if (index === tabData.num) {
                    tabFn.active = true;
                    _this.emitTabChanged(tabData, tabFn);
                }
            }
            index++;
        }));
    };
    /**
     * Emit the event when tab changed
     */
    /**
     * Emit the event when tab changed
     * @private
     * @param {?} tabBar
     * @param {?} tabCnt
     * @return {?}
     */
    CdTabsComponent.prototype.emitTabChanged = /**
     * Emit the event when tab changed
     * @private
     * @param {?} tabBar
     * @param {?} tabCnt
     * @return {?}
     */
    function (tabBar, tabCnt) {
        this.tabChangedEvent.emit({
            num: tabBar.num,
            tabId: tabBar.tabId,
            tabButton: tabBar.tabButton,
            tabContent: tabCnt
        });
    };
    CdTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cd-tabs',
                    template: "\n      <div class=\"tabs-container\" [class.vertical]=\"disposition === 'vertical'\">\n        <ng-content></ng-content>\n      </div>",
                    styles: [".vertical {\n        display: flex;\n    }"]
                }] }
    ];
    CdTabsComponent.propDecorators = {
        tabBar: [{ type: ContentChild, args: [CdTabBarComponent, { static: false },] }],
        tabsContent: [{ type: ContentChildren, args: [CdTabContentComponent,] }],
        tabChangedEvent: [{ type: Output }],
        selectMode: [{ type: Input }],
        displayMode: [{ type: Input }],
        disposition: [{ type: Input }]
    };
    return CdTabsComponent;
}());
export { CdTabsComponent };
if (false) {
    /** @type {?} */
    CdTabsComponent.prototype.tabBar;
    /** @type {?} */
    CdTabsComponent.prototype.tabsContent;
    /** @type {?} */
    CdTabsComponent.prototype.tabChangedEvent;
    /** @type {?} */
    CdTabsComponent.prototype.selectMode;
    /** @type {?} */
    CdTabsComponent.prototype.displayMode;
    /** @type {?} */
    CdTabsComponent.prototype.disposition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNkLXRhYnMvIiwic291cmNlcyI6WyJsaWIvY2QtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDZSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDdkYsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBb0IsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUdqRSxvQ0FFQzs7O0lBREcsb0NBQW1DOztBQUd2QztJQUFBO1FBZWMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUUzRCxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBdUg5QixDQUFDOzs7O0lBckhHLDRDQUFrQjs7O0lBQWxCO1FBQUEsaUJBTUM7UUFMRyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQU8sSUFBSyxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksZ0NBQU07Ozs7O0lBQWIsVUFBYyxHQUEyQztRQUF6RCxp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TUFBTSxFQUFFLEtBQUssRUFBQzs4QkFDL0MsZUFBZSxTQUFDLHFCQUFxQjtrQ0FFckMsTUFBTTs2QkFFTixLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUF1SFYsc0JBQUM7Q0FBQSxBQTFJRCxJQTBJQztTQWhJWSxlQUFlOzs7SUFFeEIsaUNBQTRFOztJQUM1RSxzQ0FBc0Y7O0lBRXRGLDBDQUFvRTs7SUFFcEUscUNBQStCOztJQUMvQixzQ0FBaUM7O0lBQ2pDLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LFxuICAgIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RUYWJCYXJDb21wb25lbnQsIENkVGFiQmFySW50ZXJmYWNlfSBmcm9tICcuL2NkLXRhYi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7Q2RUYWJDb250ZW50Q29tcG9uZW50fSBmcm9tICcuL2NkLXRhYi1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0NkVGFiQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2NkLXRhYi1idXR0b24uY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDZFRhYkludGVyZmFjZSBleHRlbmRzIENkVGFiQmFySW50ZXJmYWNlIHtcbiAgICB0YWJDb250ZW50PzogQ2RUYWJDb250ZW50Q29tcG9uZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NkLXRhYnMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwidGFicy1jb250YWluZXJcIiBbY2xhc3MudmVydGljYWxdPVwiZGlzcG9zaXRpb24gPT09ICd2ZXJ0aWNhbCdcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgLnZlcnRpY2FsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ2RUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBAQ29udGVudENoaWxkKENkVGFiQmFyQ29tcG9uZW50LCB7c3RhdGljOiBmYWxzZX0pIHRhYkJhcjogQ2RUYWJCYXJDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZHJlbihDZFRhYkNvbnRlbnRDb21wb25lbnQpIHRhYnNDb250ZW50OiBRdWVyeUxpc3Q8Q2RUYWJDb250ZW50Q29tcG9uZW50PjtcblxuICAgIEBPdXRwdXQoKSB0YWJDaGFuZ2VkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENkVGFiSW50ZXJmYWNlfG51bGw+KCk7XG5cbiAgICBASW5wdXQoKSBzZWxlY3RNb2RlID0gJ2NvbmZpZyc7XG4gICAgQElucHV0KCkgZGlzcGxheU1vZGUgPSAnZGVmYXVsdCc7XG4gICAgQElucHV0KCkgZGlzcG9zaXRpb24gPSAnJztcblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50YWJCYXIudGFiU2VsZWN0ZWRFdmVudC5zdWJzY3JpYmUoKHRhYkRhdGEpID0+IHRoaXMuYWN0aXZlVGFiQ29udGVudCh0YWJEYXRhKSk7XG5cbiAgICAgICAgdGhpcy50YWJCYXIuc2VsZWN0TW9kZSA9IHRoaXMuc2VsZWN0TW9kZTtcbiAgICAgICAgdGhpcy50YWJCYXIuZGlzcGxheU1vZGUgPSB0aGlzLmRpc3BsYXlNb2RlO1xuICAgICAgICB0aGlzLnRhYkJhci5kaXNwb3NpdGlvbiA9IHRoaXMuZGlzcG9zaXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGEgdGFiIGFjY29yZGluZyBudW0sIHRhYiBpZCBvciBDZFRhYkJ1dHRvbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QodGFiOiBudW1iZXIgfCBzdHJpbmcgfCBDZFRhYkJ1dHRvbkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyLnNlbGVjdCh0YWIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHJlc29sdmUoZmFsc2UpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RlZCB0YWJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxDZFRhYkludGVyZmFjZSB8IG51bGw+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJCYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhci5nZXRTZWxlY3RlZCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IHJlc3VsdC5udW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSWQ6IHJlc3VsdC50YWJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b246IHJlc3VsdC50YWJCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQ29udGVudDogdGhpcy5nZXRBY3RpdmF0ZWRUYWJDb250ZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHJlc29sdmUobnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSB0YWIgYWNjb3JkaW5nIG51bWJlciwgdGFiIGlkIG9yIENkVGFiQnV0dG9uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldFRhYih0YWI6IG51bWJlciB8IHN0cmluZyB8IENkVGFiQnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxDZFRhYkludGVyZmFjZSB8IG51bGw+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJCYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhci5nZXRUYWIodGFiKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiByZXN1bHQubnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYklkOiByZXN1bHQudGFiSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uOiByZXN1bHQudGFiQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnQ6IHRoaXMuZ2V0QWN0aXZhdGVkVGFiQ29udGVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiByZXNvbHZlKG51bGwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2UgdGhlIGFjdGl2YXRlZCB0YWIgY29udGVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0QWN0aXZhdGVkVGFiQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy50YWJzQ29udGVudC50b0FycmF5KCkuZm9yRWFjaCh0YWJGbiA9PiB7XG4gICAgICAgICAgICBpZiAodGFiRm4uYWN0aXZlU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFiRm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmUgdGhlIHRhYiBjb250ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhY3RpdmVUYWJDb250ZW50KHRhYkRhdGE6IENkVGFiQmFySW50ZXJmYWNlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGFic0NvbnRlbnQudG9BcnJheSgpLmZvckVhY2godGFiRm4gPT4ge1xuICAgICAgICAgICAgdGFiRm4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGFiRGF0YS50YWJJZCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJEYXRhLnRhYklkID09PSB0YWJGbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJGbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRUYWJDaGFuZ2VkKHRhYkRhdGEsIHRhYkZuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGFiRGF0YS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiRm4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0VGFiQ2hhbmdlZCh0YWJEYXRhLCB0YWJGbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdCB0aGUgZXZlbnQgd2hlbiB0YWIgY2hhbmdlZFxuICAgICAqL1xuICAgIHByaXZhdGUgZW1pdFRhYkNoYW5nZWQodGFiQmFyOiBDZFRhYkJhckludGVyZmFjZSwgdGFiQ250OiBDZFRhYkNvbnRlbnRDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy50YWJDaGFuZ2VkRXZlbnQuZW1pdCh7XG4gICAgICAgICAgICBudW06IHRhYkJhci5udW0sXG4gICAgICAgICAgICB0YWJJZDogdGFiQmFyLnRhYklkLFxuICAgICAgICAgICAgdGFiQnV0dG9uOiB0YWJCYXIudGFiQnV0dG9uLFxuICAgICAgICAgICAgdGFiQ29udGVudDogdGFiQ250XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19