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
export class CdTabsComponent {
    constructor() {
        this.tabContentChanged = new EventEmitter();
        this.tabChanged = new EventEmitter();
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
        this.tabChanged.emit({
            num: tabData.num,
            tabId: tabData.tabId
        });
        this.tabsContent.toArray().forEach((/**
         * @param {?} tabFn
         * @return {?}
         */
        tabFn => {
            tabFn.active = false;
            if (tabData.tabId) {
                if (tabData.tabId === tabFn.id) {
                    tabFn.active = true;
                    this.emitTabContentChanged(tabData, tabFn);
                }
            }
            else {
                if (index === tabData.num) {
                    tabFn.active = true;
                    this.emitTabContentChanged(tabData, tabFn);
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
    emitTabContentChanged(tabBar, tabCnt) {
        this.tabContentChanged.emit({
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
    tabContentChanged: [{ type: Output }],
    tabChanged: [{ type: Output }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNkLXRhYnMvIiwic291cmNlcyI6WyJsaWIvY2QtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDZSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFDdkYsU0FBUyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBb0IsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQzs7OztBQUdqRSwyQ0FFQzs7O0lBREcsMkNBQW1DOzs7OztBQUd2QyxvQ0FHQzs7O0lBRkcsNkJBQVk7O0lBQ1osK0JBQWM7O0FBYWxCLE1BQU0sT0FBTyxlQUFlO0lBVjVCO1FBZWMsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQThCLENBQUM7UUFDbkUsZUFBVSxHQUFHLElBQUksWUFBWSxFQUF1QixDQUFDO1FBRXRELGVBQVUsR0FBRyxRQUFRLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxTQUFTLENBQUM7UUFDeEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUEySDlCLENBQUM7Ozs7SUF6SEcsa0JBQWtCO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxD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Q0E7O01BRVA7YUFDTDs7O3FCQUdJLFlBQVksU0FBQyxpQkFBaUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7MEJBQy9DLGVBQWUsU0FBQyxxQkFBcUI7Z0NBRXJDLE1BQU07eUJBQ04sTUFBTTt5QkFFTixLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQVJOLGlDQUE0RTs7SUFDNUUsc0NBQXNGOztJQUV0Riw0Q0FBNkU7O0lBQzdFLHFDQUErRDs7SUFFL0QscUNBQStCOztJQUMvQixzQ0FBaUM7O0lBQ2pDLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIENvbnRlbnRDaGlsZHJlbiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LFxuICAgIFF1ZXJ5TGlzdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RUYWJCYXJDb21wb25lbnQsIENkVGFiQmFySW50ZXJmYWNlfSBmcm9tICcuL2NkLXRhYi1iYXIuY29tcG9uZW50JztcbmltcG9ydCB7Q2RUYWJDb250ZW50Q29tcG9uZW50fSBmcm9tICcuL2NkLXRhYi1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQge0NkVGFiQnV0dG9uQ29tcG9uZW50fSBmcm9tICcuL2NkLXRhYi1idXR0b24uY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBDZFRhYkNvbnRlbnRJbnRlcmZhY2UgZXh0ZW5kcyBDZFRhYkJhckludGVyZmFjZSB7XG4gICAgdGFiQ29udGVudD86IENkVGFiQ29udGVudENvbXBvbmVudDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDZFRhYkludGVyZmFjZSB7XG4gICAgbnVtOiBudW1iZXI7XG4gICAgdGFiSWQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjZC10YWJzJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiBjbGFzcz1cInRhYnMtY29udGFpbmVyXCIgW2NsYXNzLnZlcnRpY2FsXT1cImRpc3Bvc2l0aW9uID09PSAndmVydGljYWwnXCI+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbYC52ZXJ0aWNhbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfWBdXG59KVxuZXhwb3J0IGNsYXNzIENkVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuXG4gICAgQENvbnRlbnRDaGlsZChDZFRhYkJhckNvbXBvbmVudCwge3N0YXRpYzogZmFsc2V9KSB0YWJCYXI6IENkVGFiQmFyQ29tcG9uZW50O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oQ2RUYWJDb250ZW50Q29tcG9uZW50KSB0YWJzQ29udGVudDogUXVlcnlMaXN0PENkVGFiQ29udGVudENvbXBvbmVudD47XG5cbiAgICBAT3V0cHV0KCkgdGFiQ29udGVudENoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENkVGFiQ29udGVudEludGVyZmFjZXxudWxsPigpO1xuICAgIEBPdXRwdXQoKSB0YWJDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxDZFRhYkludGVyZmFjZXxudWxsPigpO1xuXG4gICAgQElucHV0KCkgc2VsZWN0TW9kZSA9ICdjb25maWcnO1xuICAgIEBJbnB1dCgpIGRpc3BsYXlNb2RlID0gJ2RlZmF1bHQnO1xuICAgIEBJbnB1dCgpIGRpc3Bvc2l0aW9uID0gJyc7XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMudGFiQmFyLnRhYlNlbGVjdGVkRXZlbnQuc3Vic2NyaWJlKCh0YWJEYXRhKSA9PiB0aGlzLmFjdGl2ZVRhYkNvbnRlbnQodGFiRGF0YSkpO1xuXG4gICAgICAgIHRoaXMudGFiQmFyLnNlbGVjdE1vZGUgPSB0aGlzLnNlbGVjdE1vZGU7XG4gICAgICAgIHRoaXMudGFiQmFyLmRpc3BsYXlNb2RlID0gdGhpcy5kaXNwbGF5TW9kZTtcbiAgICAgICAgdGhpcy50YWJCYXIuZGlzcG9zaXRpb24gPSB0aGlzLmRpc3Bvc2l0aW9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCBhIHRhYiBhY2NvcmRpbmcgbnVtLCB0YWIgaWQgb3IgQ2RUYWJCdXR0b25Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgc2VsZWN0KHRhYjogbnVtYmVyIHwgc3RyaW5nIHwgQ2RUYWJCdXR0b25Db21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJCYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhci5zZWxlY3QodGFiKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiByZXNvbHZlKHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiByZXNvbHZlKGZhbHNlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgc2VsZWN0ZWQgdGFiXG4gICAgICovXG4gICAgcHVibGljIGdldFNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Q2RUYWJDb250ZW50SW50ZXJmYWNlIHwgbnVsbD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyLmdldFNlbGVjdGVkKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTogcmVzdWx0Lm51bSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJZDogcmVzdWx0LnRhYklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbjogcmVzdWx0LnRhYkJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJDb250ZW50OiB0aGlzLmdldEFjdGl2YXRlZFRhYkNvbnRlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4gcmVzb2x2ZShudWxsKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIHRhYiBhY2NvcmRpbmcgbnVtYmVyLCB0YWIgaWQgb3IgQ2RUYWJCdXR0b25Db21wb25lbnRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VGFiKHRhYjogbnVtYmVyIHwgc3RyaW5nIHwgQ2RUYWJCdXR0b25Db21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPENkVGFiQ29udGVudEludGVyZmFjZSB8IG51bGw+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJCYXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhci5nZXRUYWIodGFiKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtOiByZXN1bHQubnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYklkOiByZXN1bHQudGFiSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uOiByZXN1bHQudGFiQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRlbnQ6IHRoaXMuZ2V0QWN0aXZhdGVkVGFiQ29udGVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiByZXNvbHZlKG51bGwpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2UgdGhlIGFjdGl2YXRlZCB0YWIgY29udGVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0QWN0aXZhdGVkVGFiQ29udGVudCgpIHtcbiAgICAgICAgdGhpcy50YWJzQ29udGVudC50b0FycmF5KCkuZm9yRWFjaCh0YWJGbiA9PiB7XG4gICAgICAgICAgICBpZiAodGFiRm4uYWN0aXZlU3RhdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFiRm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3RpdmUgdGhlIHRhYiBjb250ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBhY3RpdmVUYWJDb250ZW50KHRhYkRhdGE6IENkVGFiQmFySW50ZXJmYWNlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGFiQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgICAgIG51bTogdGFiRGF0YS5udW0sXG4gICAgICAgICAgICB0YWJJZDogdGFiRGF0YS50YWJJZFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50YWJzQ29udGVudC50b0FycmF5KCkuZm9yRWFjaCh0YWJGbiA9PiB7XG4gICAgICAgICAgICB0YWJGbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0YWJEYXRhLnRhYklkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhYkRhdGEudGFiSWQgPT09IHRhYkZuLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYkZuLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFRhYkNvbnRlbnRDaGFuZ2VkKHRhYkRhdGEsIHRhYkZuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gdGFiRGF0YS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiRm4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0VGFiQ29udGVudENoYW5nZWQodGFiRGF0YSwgdGFiRm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtaXQgdGhlIGV2ZW50IHdoZW4gdGFiIGNoYW5nZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGVtaXRUYWJDb250ZW50Q2hhbmdlZCh0YWJCYXI6IENkVGFiQmFySW50ZXJmYWNlLCB0YWJDbnQ6IENkVGFiQ29udGVudENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLnRhYkNvbnRlbnRDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgbnVtOiB0YWJCYXIubnVtLFxuICAgICAgICAgICAgdGFiSWQ6IHRhYkJhci50YWJJZCxcbiAgICAgICAgICAgIHRhYkJ1dHRvbjogdGFiQmFyLnRhYkJ1dHRvbixcbiAgICAgICAgICAgIHRhYkNvbnRlbnQ6IHRhYkNudFxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==