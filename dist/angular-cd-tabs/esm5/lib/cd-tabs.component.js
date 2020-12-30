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
export function CdTabContentInterface() { }
if (false) {
    /** @type {?|undefined} */
    CdTabContentInterface.prototype.tabContent;
}
/**
 * @record
 */
export function CdTabInterface() { }
if (false) {
    /** @type {?} */
    CdTabInterface.prototype.num;
    /** @type {?} */
    CdTabInterface.prototype.tabId;
}
var CdTabsComponent = /** @class */ (function () {
    function CdTabsComponent() {
        this.tabContentChanged = new EventEmitter();
        this.tabChanged = new EventEmitter();
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
        this.tabChanged.emit({
            num: tabData.num,
            tabId: tabData.tabId
        });
        this.tabsContent.toArray().forEach((/**
         * @param {?} tabFn
         * @return {?}
         */
        function (tabFn) {
            tabFn.active = false;
            if (tabData.tabId) {
                if (tabData.tabId === tabFn.id) {
                    tabFn.active = true;
                    _this.emitTabContentChanged(tabData, tabFn);
                }
            }
            else {
                if (index === tabData.num) {
                    tabFn.active = true;
                    _this.emitTabContentChanged(tabData, tabFn);
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
    CdTabsComponent.prototype.emitTabContentChanged = /**
     * Emit the event when tab changed
     * @private
     * @param {?} tabBar
     * @param {?} tabCnt
     * @return {?}
     */
    function (tabBar, tabCnt) {
        this.tabContentChanged.emit({
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
        tabContentChanged: [{ type: Output }],
        tabChanged: [{ type: Output }],
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
    CdTabsComponent.prototype.tabContentChanged;
    /** @type {?} */
    CdTabsComponent.prototype.tabChanged;
    /** @type {?} */
    CdTabsComponent.prototype.selectMode;
    /** @type {?} */
    CdTabsComponent.prototype.displayMode;
    /** @type {?} */
    CdTabsComponent.prototype.disposition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNkLXRhYnMvIiwic291cmNlcyI6WyJsaWIvY2QtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDZSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDdkYsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBb0IsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUdqRSwyQ0FFQzs7O0lBREcsMkNBQW1DOzs7OztBQUd2QyxvQ0FHQzs7O0lBRkcsNkJBQVk7O0lBQ1osK0JBQWM7O0FBR2xCO0lBQUE7UUFlYyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBOEIsQ0FBQztRQUNuRSxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFFdEQsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQTJIOUIsQ0FBQzs7OztJQXpIRyw0Q0FBa0I7OztJQUFsQjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQTlCLENBQThCLEVBQUMsQ0FBQztRQUVwRixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxD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LEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQTdJSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSx5SUFHRDs2QkFDQSw0Q0FFUDtpQkFDTDs7O3lCQUdJLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7OEJBQy9DLGVBQWUsU0FBQyxxQkFBcUI7b0NBRXJDLE1BQU07NkJBQ04sTUFBTTs2QkFFTixLQUFLOzhCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUEySFYsc0JBQUM7Q0FBQSxBQS9JRCxJQStJQztTQXJJWSxlQUFlOzs7SUFFeEIsaUNBQTRFOztJQUM1RSxzQ0FBc0Y7O0lBRXRGLDRDQUE2RTs7SUFDN0UscUNBQStEOztJQUUvRCxxQ0FBK0I7O0lBQy9CLHNDQUFpQzs7SUFDakMsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsXG4gICAgUXVlcnlMaXN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZFRhYkJhckNvbXBvbmVudCwgQ2RUYWJCYXJJbnRlcmZhY2V9IGZyb20gJy4vY2QtdGFiLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtDZFRhYkNvbnRlbnRDb21wb25lbnR9IGZyb20gJy4vY2QtdGFiLWNvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7Q2RUYWJCdXR0b25Db21wb25lbnR9IGZyb20gJy4vY2QtdGFiLWJ1dHRvbi5jb21wb25lbnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENkVGFiQ29udGVudEludGVyZmFjZSBleHRlbmRzIENkVGFiQmFySW50ZXJmYWNlIHtcbiAgICB0YWJDb250ZW50PzogQ2RUYWJDb250ZW50Q29tcG9uZW50O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENkVGFiSW50ZXJmYWNlIHtcbiAgICBudW06IG51bWJlcjtcbiAgICB0YWJJZDogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NkLXRhYnMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwidGFicy1jb250YWluZXJcIiBbY2xhc3MudmVydGljYWxdPVwiZGlzcG9zaXRpb24gPT09ICd2ZXJ0aWNhbCdcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgLnZlcnRpY2FsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ2RUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBAQ29udGVudENoaWxkKENkVGFiQmFyQ29tcG9uZW50LCB7c3RhdGljOiBmYWxzZX0pIHRhYkJhcjogQ2RUYWJCYXJDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZHJlbihDZFRhYkNvbnRlbnRDb21wb25lbnQpIHRhYnNDb250ZW50OiBRdWVyeUxpc3Q8Q2RUYWJDb250ZW50Q29tcG9uZW50PjtcblxuICAgIEBPdXRwdXQoKSB0YWJDb250ZW50Q2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2RUYWJDb250ZW50SW50ZXJmYWNlfG51bGw+KCk7XG4gICAgQE91dHB1dCgpIHRhYkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENkVGFiSW50ZXJmYWNlfG51bGw+KCk7XG5cbiAgICBASW5wdXQoKSBzZWxlY3RNb2RlID0gJ2NvbmZpZyc7XG4gICAgQElucHV0KCkgZGlzcGxheU1vZGUgPSAnZGVmYXVsdCc7XG4gICAgQElucHV0KCkgZGlzcG9zaXRpb24gPSAnJztcblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50YWJCYXIudGFiU2VsZWN0ZWRFdmVudC5zdWJzY3JpYmUoKHRhYkRhdGEpID0+IHRoaXMuYWN0aXZlVGFiQ29udGVudCh0YWJEYXRhKSk7XG5cbiAgICAgICAgdGhpcy50YWJCYXIuc2VsZWN0TW9kZSA9IHRoaXMuc2VsZWN0TW9kZTtcbiAgICAgICAgdGhpcy50YWJCYXIuZGlzcGxheU1vZGUgPSB0aGlzLmRpc3BsYXlNb2RlO1xuICAgICAgICB0aGlzLnRhYkJhci5kaXNwb3NpdGlvbiA9IHRoaXMuZGlzcG9zaXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGEgdGFiIGFjY29yZGluZyBudW0sIHRhYiBpZCBvciBDZFRhYkJ1dHRvbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QodGFiOiBudW1iZXIgfCBzdHJpbmcgfCBDZFRhYkJ1dHRvbkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyLnNlbGVjdCh0YWIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHJlc29sdmUoZmFsc2UpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RlZCB0YWJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxDZFRhYkNvbnRlbnRJbnRlcmZhY2UgfCBudWxsPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJCYXIuZ2V0U2VsZWN0ZWQoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiByZXN1bHQubnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYklkOiByZXN1bHQudGFiSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uOiByZXN1bHQudGFiQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnQ6IHRoaXMuZ2V0QWN0aXZhdGVkVGFiQ29udGVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiByZXNvbHZlKG51bGwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgdGFiIGFjY29yZGluZyBudW1iZXIsIHRhYiBpZCBvciBDZFRhYkJ1dHRvbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRUYWIodGFiOiBudW1iZXIgfCBzdHJpbmcgfCBDZFRhYkJ1dHRvbkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Q2RUYWJDb250ZW50SW50ZXJmYWNlIHwgbnVsbD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyLmdldFRhYih0YWIpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IHJlc3VsdC5udW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSWQ6IHJlc3VsdC50YWJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b246IHJlc3VsdC50YWJCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQ29udGVudDogdGhpcy5nZXRBY3RpdmF0ZWRUYWJDb250ZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHJlc29sdmUobnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZSB0aGUgYWN0aXZhdGVkIHRhYiBjb250ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRBY3RpdmF0ZWRUYWJDb250ZW50KCkge1xuICAgICAgICB0aGlzLnRhYnNDb250ZW50LnRvQXJyYXkoKS5mb3JFYWNoKHRhYkZuID0+IHtcbiAgICAgICAgICAgIGlmICh0YWJGbi5hY3RpdmVTdGF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YWJGbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdGl2ZSB0aGUgdGFiIGNvbnRlbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGFjdGl2ZVRhYkNvbnRlbnQodGFiRGF0YTogQ2RUYWJCYXJJbnRlcmZhY2UpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50YWJDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgbnVtOiB0YWJEYXRhLm51bSxcbiAgICAgICAgICAgIHRhYklkOiB0YWJEYXRhLnRhYklkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRhYnNDb250ZW50LnRvQXJyYXkoKS5mb3JFYWNoKHRhYkZuID0+IHtcbiAgICAgICAgICAgIHRhYkZuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRhYkRhdGEudGFiSWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFiRGF0YS50YWJJZCA9PT0gdGFiRm4uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiRm4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0VGFiQ29udGVudENoYW5nZWQodGFiRGF0YSwgdGFiRm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0YWJEYXRhLm51bSkge1xuICAgICAgICAgICAgICAgICAgICB0YWJGbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRUYWJDb250ZW50Q2hhbmdlZCh0YWJEYXRhLCB0YWJGbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdCB0aGUgZXZlbnQgd2hlbiB0YWIgY2hhbmdlZFxuICAgICAqL1xuICAgIHByaXZhdGUgZW1pdFRhYkNvbnRlbnRDaGFuZ2VkKHRhYkJhcjogQ2RUYWJCYXJJbnRlcmZhY2UsIHRhYkNudDogQ2RUYWJDb250ZW50Q29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMudGFiQ29udGVudENoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgICBudW06IHRhYkJhci5udW0sXG4gICAgICAgICAgICB0YWJJZDogdGFiQmFyLnRhYklkLFxuICAgICAgICAgICAgdGFiQnV0dG9uOiB0YWJCYXIudGFiQnV0dG9uLFxuICAgICAgICAgICAgdGFiQ29udGVudDogdGFiQ250XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19