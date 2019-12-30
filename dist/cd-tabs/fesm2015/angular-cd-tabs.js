import { EventEmitter, Component, ViewEncapsulation, ElementRef, Output, Input, HostListener, ContentChildren, ContentChild, NgModule } from '@angular/core';
import { __awaiter } from 'tslib';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdTabButtonComponent {
    /**
     * @param {?} eltRef
     */
    constructor(eltRef) {
        this.eltRef = eltRef;
        this.buttonClick = new EventEmitter();
        this.iconPosition = 'center';
    }
    /**
     * @return {?}
     */
    get content() {
        if (this.eltRef && this.eltRef.nativeElement && this.eltRef.nativeElement.childNodes[0]) {
            return this.eltRef.nativeElement.childNodes[0].innerHTML;
        }
        return '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        this.active = value;
        this.buildCss();
    }
    /**
     * @param {?} coordX
     * @param {?} coordY
     * @return {?}
     */
    onClick(coordX, coordY) {
        this.buttonClick.emit(this);
        if (this.ripple === 'unbounded' || this.ripple === 'bounded') {
            this.addRipple(coordX, coordY);
        }
    }
    /**
     * @private
     * @return {?}
     */
    get hasLabel() {
        return !!this.elt.querySelector('ion-label');
    }
    /**
     * @private
     * @return {?}
     */
    get hasIcon() {
        return !!this.elt.querySelector('ion-icon');
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.elt = this.eltRef.nativeElement;
        this.buildCss();
    }
    /**
     * Add Ripple to tab button
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    addRipple(x, y) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            resolve => {
                /** @type {?} */
                const rect = this.elt.getBoundingClientRect();
                /** @type {?} */
                const width = rect.width;
                /** @type {?} */
                const height = rect.height;
                /** @type {?} */
                const hypotenuse = Math.sqrt(width * width + height * height);
                /** @type {?} */
                const maxDim = Math.max(height, width);
                /** @type {?} */
                const maxRadius = this.ripple === 'bounded' ? maxDim : hypotenuse + PADDING;
                /** @type {?} */
                const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                /** @type {?} */
                const finalScale = maxRadius / initialSize;
                /** @type {?} */
                let posX = x - rect.left;
                /** @type {?} */
                let posY = y - rect.top;
                if (this.ripple === 'bounded') {
                    posX = width * 0.5;
                    posY = height * 0.5;
                }
                /** @type {?} */
                const styleX = posX - initialSize * 0.5;
                /** @type {?} */
                const styleY = posY - initialSize * 0.5;
                /** @type {?} */
                const moveX = width * 0.5 - posX;
                /** @type {?} */
                const moveY = height * 0.5 - posY;
                /** @type {?} */
                const div = document.createElement('div');
                div.classList.add('cd-ripple-effect');
                /** @type {?} */
                const style = div.style;
                style.top = styleY + 'px';
                style.left = styleX + 'px';
                style.width = style.height = initialSize + 'px';
                style.setProperty('--final-scale', `${finalScale}`);
                style.setProperty('--translate-end', `${moveX}px, ${moveY}px`);
                /** @type {?} */
                const container = this.elt.shadowRoot || this.elt;
                container.appendChild(div);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    removeRipple(div);
                    resolve((/**
                     * @return {?}
                     */
                    () => {
                    }));
                }), 225 + 100);
            }));
        });
    }
    /**
     * Build Css for component
     * @private
     * @return {?}
     */
    buildCss() {
        /** @type {?} */
        let className = 'cd-tab-button ';
        if (this.active) {
            className += 'cd-tab-selected ';
        }
        if (this.hasIcon) {
            className += 'cd-tab-has-icon ';
        }
        if (this.hasLabel) {
            className += 'cd-tab-has-label ';
        }
        if (this.hasLabel && !this.hasIcon) {
            className += 'cd-tab-has-label-only ';
        }
        if (!this.hasLabel && this.hasIcon) {
            className += 'cd-tab-has-icon-only ';
        }
        if (this.iconPosition === 'start') {
            className += 'cd-tab-icon-start ';
        }
        if (this.iconPosition === 'end') {
            className += 'cd-tab-icon-end ';
        }
        if (this.disabled === true) {
            className += 'cd-tab-disabled ';
        }
        this.elt.className = className;
    }
}
CdTabButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'cd-tab-button',
                template: `
        <ng-content></ng-content>`,
                encapsulation: ViewEncapsulation.None,
                styles: [".cd-tab-button{--ripple-color:var(--color-selected);outline:0;width:100%;max-width:var(--cd-tab-max-width);text-align:center;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:relative;overflow:hidden;box-sizing:border-box;-webkit-user-drag:none;background:var(--background);color:var(--color);min-height:var(--cd-tab-min-height,50px);padding:var(--cd-tab-padding-v,1rem) var(--cd-tab-padding-h,.5rem);border:var(--cd-tab-border) solid var(--color)}.cd-tab-button:first-child{border-radius:var(--cd-tab-border-radius) 0 0 var(--cd-tab-border-radius)}.cd-tab-button:last-child{border-radius:0 var(--cd-tab-border-radius) var(--cd-tab-border-radius) 0}.cd-tab-button:hover{color:var(--color-hover);background:var(--background-hover)}.cd-tab-button i,.cd-tab-button ion-icon,.cd-tab-button ion-label,.cd-tab-button label{display:block;-ms-grid-row-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}.cd-tab-button ion-label,.cd-tab-button label{-webkit-box-ordinal-group:1;order:0;font-size:.8rem;line-height:1.4rem}.cd-tab-button label{margin:0;cursor:pointer}.cd-tab-button ion-icon{-webkit-box-ordinal-group:0;order:-1;height:1em;font-size:1.8rem;line-height:2rem}.cd-tab-button i{-webkit-box-ordinal-group:0;order:-1;font-size:1.6rem;vertical-align:baseline}.cd-tab-button ion-badge{box-sizing:border-box;position:absolute;z-index:1;top:5px;right:10px}.cd-tab-button .cd-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms forwards rippleAnimation,75ms forwards fadeInAnimation;animation:225ms forwards rippleAnimation,75ms forwards fadeInAnimation;will-change:transform,opacity;pointer-events:none}.cd-tab-button .fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:150ms forwards fadeOutAnimation;animation:150ms forwards fadeOutAnimation}.cd-tab-has-label-only ion-label{white-space:normal}.cd-tab-icon-start{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.cd-tab-icon-start i,.cd-tab-icon-start ion-icon{font-size:1.2rem;margin-right:5px}.cd-tab-icon-start ion-label,.cd-tab-icon-start label{font-size:1rem}.cd-tab-icon-end{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.cd-tab-icon-end i,.cd-tab-icon-end ion-icon{font-size:1.2rem;margin-left:5px}.cd-tab-icon-end ion-label,.cd-tab-icon-end label{font-size:1rem}.cd-tab-hidden{display:none!important}.cd-tab-selected{color:var(--color-selected);background:var(--background-selected)}.cd-tab-disabled{pointer-events:none;opacity:.4}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"]
            }] }
];
/** @nocollapse */
CdTabButtonComponent.ctorParameters = () => [
    { type: ElementRef }
];
CdTabButtonComponent.propDecorators = {
    buttonClick: [{ type: Output }],
    content: [{ type: Output }],
    ripple: [{ type: Input }],
    tab: [{ type: Input }],
    routerLink: [{ type: Input }],
    iconPosition: [{ type: Input }],
    disabled: [{ type: Input }],
    selected: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event.x', '$event.y'],] }]
};
if (false) {
    /** @type {?} */
    CdTabButtonComponent.prototype.buttonClick;
    /** @type {?} */
    CdTabButtonComponent.prototype.ripple;
    /** @type {?} */
    CdTabButtonComponent.prototype.tab;
    /** @type {?} */
    CdTabButtonComponent.prototype.routerLink;
    /** @type {?} */
    CdTabButtonComponent.prototype.iconPosition;
    /** @type {?} */
    CdTabButtonComponent.prototype.disabled;
    /** @type {?} */
    CdTabButtonComponent.prototype.active;
    /** @type {?} */
    CdTabButtonComponent.prototype.elt;
    /**
     * @type {?}
     * @private
     */
    CdTabButtonComponent.prototype.eltRef;
}
/** @type {?} */
const removeRipple = (/**
 * @param {?} ripple
 * @return {?}
 */
(ripple) => {
    ripple.classList.add('fade-out');
    setTimeout((/**
     * @return {?}
     */
    () => {
        ripple.remove();
    }), 200);
});
const ɵ0 = removeRipple;
/** @type {?} */
const PADDING = 10;
/** @type {?} */
const INITIAL_ORIGIN_SCALE = 0.5;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CdTabBarInterface() { }
if (false) {
    /** @type {?} */
    CdTabBarInterface.prototype.num;
    /** @type {?} */
    CdTabBarInterface.prototype.tabId;
    /** @type {?} */
    CdTabBarInterface.prototype.tabButton;
}
class CdTabBarComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdTabContentComponent {
    /**
     * @param {?} elt
     */
    constructor(elt) {
        this.elt = elt;
        this.active = false;
    }
    /**
     * Content of tab
     * @return {?}
     */
    get content() {
        if (this.elt && this.elt.nativeElement && this.elt.nativeElement.childNodes[0]) {
            return this.elt.nativeElement.childNodes[0].innerHTML;
        }
        return '';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.className = this.elt.nativeElement.className;
        this.elt.nativeElement.className = '';
    }
}
CdTabContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'cd-tab-content',
                template: `<div [hidden]="!active" [class]="className"><ng-content></ng-content></div>`
            }] }
];
/** @nocollapse */
CdTabContentComponent.ctorParameters = () => [
    { type: ElementRef }
];
CdTabContentComponent.propDecorators = {
    id: [{ type: Input }],
    active: [{ type: Input }],
    content: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CdTabContentComponent.prototype.id;
    /** @type {?} */
    CdTabContentComponent.prototype.active;
    /** @type {?} */
    CdTabContentComponent.prototype.className;
    /**
     * @type {?}
     * @private
     */
    CdTabContentComponent.prototype.elt;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function CdTabInterface() { }
if (false) {
    /** @type {?|undefined} */
    CdTabInterface.prototype.tabContent;
}
class CdTabsComponent {
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
            if (tabFn.active === true) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CdTabsModule {
}
CdTabsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CdTabsComponent,
                    CdTabBarComponent,
                    CdTabButtonComponent,
                    CdTabContentComponent
                ],
                entryComponents: [CdTabsComponent],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [CdTabsComponent, CdTabBarComponent, CdTabButtonComponent, CdTabContentComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CdTabsComponent, CdTabsModule, CdTabBarComponent as ɵa, CdTabButtonComponent as ɵb, CdTabContentComponent as ɵc };
//# sourceMappingURL=angular-cd-tabs.js.map
