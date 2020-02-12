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
export class CdTabsComponent {
    constructor() {
        this.tabChangedEvent = new EventEmitter();
        this.selectMode = 'config';
        this.displayMode = 'default';
        this.disposition = '';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.tabBar.tabSelectedEvent.subscribe((/**
         * @param {?} tabData
         * @return {?}
         */
        (tabData) => this.activeTabContent(tabData)));
        this.tabBar.selectMode = this.selectMode;
        this.tabBar.displayMode = this.displayMode;
        this.tabBar.disposition = this.disposition;
    }
    /**
     * Select a tab according num, tab id or CdTabButtonComponent
     * @param {?} tab
     * @return {?}
     */
    select(tab) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            if (this.tabBar) {
                this.tabBar.select(tab)
                    .then((/**
                 * @param {?} result
                 * @return {?}
                 */
                (result) => resolve(result)))
                    .catch((/**
                 * @return {?}
                 */
                () => resolve(false)));
            }
            else {
                resolve(false);
            }
        }));
    }
    /**
     * Get selected tab
     * @return {?}
     */
    getSelected() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            if (this.tabBar) {
                this.tabBar.getSelected().then((/**
                 * @param {?} result
                 * @return {?}
                 */
                (result) => {
                    if (result !== null) {
                        resolve({
                            num: result.num,
                            tabId: result.tabId,
                            tabButton: result.tabButton,
                            tabContent: this.getActivatedTabContent()
                        });
                    }
                    else {
                        resolve(null);
                    }
                })).catch((/**
                 * @return {?}
                 */
                () => resolve(null)));
            }
            else {
                resolve(null);
            }
        }));
    }
    /**
     * Get a tab according number, tab id or CdTabButtonComponent
     * @param {?} tab
     * @return {?}
     */
    getTab(tab) {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            if (this.tabBar) {
                this.tabBar.getTab(tab).then((/**
                 * @param {?} result
                 * @return {?}
                 */
                (result) => {
                    if (result !== null) {
                        resolve({
                            num: result.num,
                            tabId: result.tabId,
                            tabButton: result.tabButton,
                            tabContent: this.getActivatedTabContent()
                        });
                    }
                    else {
                        resolve(null);
                    }
                })).catch((/**
                 * @return {?}
                 */
                () => resolve(null)));
            }
            else {
                resolve(null);
            }
        }));
    }
    /**
     * Ge the activated tab content
     * @private
     * @return {?}
     */
    getActivatedTabContent() {
        this.tabsContent.toArray().forEach((/**
         * @param {?} tabFn
         * @return {?}
         */
        tabFn => {
            if (tabFn.activeState === true) {
                return tabFn;
            }
        }));
        return null;
    }
    /**
     * Active the tab content
     * @private
     * @param {?} tabData
     * @return {?}
     */
    activeTabContent(tabData) {
        /** @type {?} */
        let index = 0;
        this.tabsContent.toArray().forEach((/**
         * @param {?} tabFn
         * @return {?}
         */
        tabFn => {
            tabFn.active = false;
            if (tabData.tabId) {
                if (tabData.tabId === tabFn.id) {
                    tabFn.active = true;
                    this.emitTabChanged(tabData, tabFn);
                }
            }
            else {
                if (index === tabData.num) {
                    tabFn.active = true;
                    this.emitTabChanged(tabData, tabFn);
                }
            }
            index++;
        }));
    }
    /**
     * Emit the event when tab changed
     * @private
     * @param {?} tabBar
     * @param {?} tabCnt
     * @return {?}
     */
    emitTabChanged(tabBar, tabCnt) {
        this.tabChangedEvent.emit({
            num: tabBar.num,
            tabId: tabBar.tabId,
            tabButton: tabBar.tabButton,
            tabContent: tabCnt
        });
    }
}
CdTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cd-tabs',
                template: `
      <div class="tabs-container" [class.vertical]="disposition === 'vertical'">
        <ng-content></ng-content>
      </div>`,
                styles: [`.vertical {
        display: flex;
    }`]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNkLXRhYnMvIiwic291cmNlcyI6WyJsaWIvY2QtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDZSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDdkYsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBb0IsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUdqRSxvQ0FFQzs7O0lBREcsb0NBQW1DOztBQWF2QyxNQUFNLE9BQU8sZUFBZTtJQVY1QjtRQWVjLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFFM0QsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN0QixnQkFBVyxHQUFHLFNBQVMsQ0FBQztRQUN4QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQXVIOUIsQ0FBQzs7OztJQXJIRyxrQkFBa0I7UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBS00sTUFBTSxDQUFDLEdBQTJDO1FBQ3JELE9BQU8sSUFBSSxPQUFPOzs7O1FBQVUsQ0FBQyxPQUFP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QixzQ0FBaUM7O0lBQ2pDLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LFxuICAgIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RUYWJCYXJDb21wb25lbnQsIENkVGFiQmFySW50ZXJmYWNlfSBmcm9tICcuL2NkLXRhYi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7Q2RUYWJDb250ZW50Q29tcG9uZW50fSBmcm9tICcuL2NkLXRhYi1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0NkVGFiQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2NkLXRhYi1idXR0b24uY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDZFRhYkludGVyZmFjZSBleHRlbmRzIENkVGFiQmFySW50ZXJmYWNlIHtcbiAgICB0YWJDb250ZW50PzogQ2RUYWJDb250ZW50Q29tcG9uZW50O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NkLXRhYnMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwidGFicy1jb250YWluZXJcIiBbY2xhc3MudmVydGljYWxdPVwiZGlzcG9zaXRpb24gPT09ICd2ZXJ0aWNhbCdcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgLnZlcnRpY2FsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9YF1cbn0pXG5leHBvcnQgY2xhc3MgQ2RUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBAQ29udGVudENoaWxkKENkVGFiQmFyQ29tcG9uZW50LCB7c3RhdGljOiBmYWxzZX0pIHRhYkJhcjogQ2RUYWJCYXJDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZHJlbihDZFRhYkNvbnRlbnRDb21wb25lbnQpIHRhYnNDb250ZW50OiBRdWVyeUxpc3Q8Q2RUYWJDb250ZW50Q29tcG9uZW50PjtcblxuICAgIEBPdXRwdXQoKSB0YWJDaGFuZ2VkRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENkVGFiSW50ZXJmYWNlfG51bGw+KCk7XG5cbiAgICBASW5wdXQoKSBzZWxlY3RNb2RlID0gJ2NvbmZpZyc7XG4gICAgQElucHV0KCkgZGlzcGxheU1vZGUgPSAnZGVmYXVsdCc7XG4gICAgQElucHV0KCkgZGlzcG9zaXRpb24gPSAnJztcblxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAgICAgdGhpcy50YWJCYXIudGFiU2VsZWN0ZWRFdmVudC5zdWJzY3JpYmUoKHRhYkRhdGEpID0+IHRoaXMuYWN0aXZlVGFiQ29udGVudCh0YWJEYXRhKSk7XG5cbiAgICAgICAgdGhpcy50YWJCYXIuc2VsZWN0TW9kZSA9IHRoaXMuc2VsZWN0TW9kZTtcbiAgICAgICAgdGhpcy50YWJCYXIuZGlzcGxheU1vZGUgPSB0aGlzLmRpc3BsYXlNb2RlO1xuICAgICAgICB0aGlzLnRhYkJhci5kaXNwb3NpdGlvbiA9IHRoaXMuZGlzcG9zaXRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGEgdGFiIGFjY29yZGluZyBudW0sIHRhYiBpZCBvciBDZFRhYkJ1dHRvbkNvbXBvbmVudFxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3QodGFiOiBudW1iZXIgfCBzdHJpbmcgfCBDZFRhYkJ1dHRvbkNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyLnNlbGVjdCh0YWIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHJlc29sdmUoZmFsc2UpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RlZCB0YWJcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxDZFRhYkludGVyZmFjZSB8IG51bGw+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJCYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhci5nZXRTZWxlY3RlZCgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW06IHJlc3VsdC5udW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSWQ6IHJlc3VsdC50YWJJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b246IHJlc3VsdC50YWJCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQ29udGVudDogdGhpcy5nZXRBY3RpdmF0ZWRUYWJDb250ZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHJlc29sdmUobnVsbCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSB0YWIgYWNjb3JkaW5nIG51bWJlciwgdGFiIGlkIG9yIENkVGFiQnV0dG9uQ29tcG9uZW50XG4gICAgICovXG4gICAgcHVibGljIGdldFRhYih0YWI6IG51bWJlciB8IHN0cmluZyB8IENkVGFiQnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxDZFRhYkludGVyZmFjZSB8IG51bGw+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJCYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhci5nZXRUYWIodGFiKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiByZXN1bHQubnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYklkOiByZXN1bHQudGFiSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uOiByZXN1bHQudGFiQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnQ6IHRoaXMuZ2V0QWN0aXZhdGVkVGFiQ29udGVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiByZXNvbHZlKG51bGwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2UgdGhlIGFjdGl2YXRlZCB0YWIgY29udGVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0QWN0aXZhdGVkVGFiQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy50YWJzQ29udGVudC50b0FycmF5KCkuZm9yRWFjaCh0YWJGbiA9PiB7XG4gICAgICAgICAgICBpZiAodGFiRm4uYWN0aXZlU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFiRm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmUgdGhlIHRhYiBjb250ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhY3RpdmVUYWJDb250ZW50KHRhYkRhdGE6IENkVGFiQmFySW50ZXJmYWNlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGFic0NvbnRlbnQudG9BcnJheSgpLmZvckVhY2godGFiRm4gPT4ge1xuICAgICAgICAgICAgdGFiRm4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGFiRGF0YS50YWJJZCkge1xuICAgICAgICAgICAgICAgIGlmICh0YWJEYXRhLnRhYklkID09PSB0YWJGbi5pZCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJGbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRUYWJDaGFuZ2VkKHRhYkRhdGEsIHRhYkZuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGFiRGF0YS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiRm4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0VGFiQ2hhbmdlZCh0YWJEYXRhLCB0YWJGbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW1pdCB0aGUgZXZlbnQgd2hlbiB0YWIgY2hhbmdlZFxuICAgICAqL1xuICAgIHByaXZhdGUgZW1pdFRhYkNoYW5nZWQodGFiQmFyOiBDZFRhYkJhckludGVyZmFjZSwgdGFiQ250OiBDZFRhYkNvbnRlbnRDb21wb25lbnQpIHtcbiAgICAgICAgdGhpcy50YWJDaGFuZ2VkRXZlbnQuZW1pdCh7XG4gICAgICAgICAgICBudW06IHRhYkJhci5udW0sXG4gICAgICAgICAgICB0YWJJZDogdGFiQmFyLnRhYklkLFxuICAgICAgICAgICAgdGFiQnV0dG9uOiB0YWJCYXIudGFiQnV0dG9uLFxuICAgICAgICAgICAgdGFiQ29udGVudDogdGFiQ250XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19