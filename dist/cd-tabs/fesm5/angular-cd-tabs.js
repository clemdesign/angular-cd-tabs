import { EventEmitter, Component, ViewEncapsulation, ElementRef, Output, Input, HostListener, ContentChildren, ContentChild, NgModule } from '@angular/core';
import { __awaiter, __generator } from 'tslib';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CdTabButtonComponent = /** @class */ (function () {
    function CdTabButtonComponent(eltRef) {
        this.eltRef = eltRef;
        this.buttonClick = new EventEmitter();
        this.iconPosition = 'center';
    }
    Object.defineProperty(CdTabButtonComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.eltRef && this.eltRef.nativeElement && this.eltRef.nativeElement.childNodes[0]) {
                return this.eltRef.nativeElement.childNodes[0].innerHTML;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdTabButtonComponent.prototype, "selected", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.active = value;
            this.buildCss();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} coordX
     * @param {?} coordY
     * @return {?}
     */
    CdTabButtonComponent.prototype.onClick = /**
     * @param {?} coordX
     * @param {?} coordY
     * @return {?}
     */
    function (coordX, coordY) {
        this.buttonClick.emit(this);
        if (this.ripple === 'unbounded' || this.ripple === 'bounded') {
            this.addRipple(coordX, coordY);
        }
    };
    Object.defineProperty(CdTabButtonComponent.prototype, "hasLabel", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return !!this.elt.querySelector('ion-label');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdTabButtonComponent.prototype, "hasIcon", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return !!this.elt.querySelector('ion-icon');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdTabButtonComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.elt = this.eltRef.nativeElement;
        this.buildCss();
    };
    /**
     * Add Ripple to tab button
     */
    /**
     * Add Ripple to tab button
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    CdTabButtonComponent.prototype.addRipple = /**
     * Add Ripple to tab button
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise((/**
                     * @param {?} resolve
                     * @return {?}
                     */
                    function (resolve) {
                        /** @type {?} */
                        var rect = _this.elt.getBoundingClientRect();
                        /** @type {?} */
                        var width = rect.width;
                        /** @type {?} */
                        var height = rect.height;
                        /** @type {?} */
                        var hypotenuse = Math.sqrt(width * width + height * height);
                        /** @type {?} */
                        var maxDim = Math.max(height, width);
                        /** @type {?} */
                        var maxRadius = _this.ripple === 'bounded' ? maxDim : hypotenuse + PADDING;
                        /** @type {?} */
                        var initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
                        /** @type {?} */
                        var finalScale = maxRadius / initialSize;
                        /** @type {?} */
                        var posX = x - rect.left;
                        /** @type {?} */
                        var posY = y - rect.top;
                        if (_this.ripple === 'bounded') {
                            posX = width * 0.5;
                            posY = height * 0.5;
                        }
                        /** @type {?} */
                        var styleX = posX - initialSize * 0.5;
                        /** @type {?} */
                        var styleY = posY - initialSize * 0.5;
                        /** @type {?} */
                        var moveX = width * 0.5 - posX;
                        /** @type {?} */
                        var moveY = height * 0.5 - posY;
                        /** @type {?} */
                        var div = document.createElement('div');
                        div.classList.add('cd-ripple-effect');
                        /** @type {?} */
                        var style = div.style;
                        style.top = styleY + 'px';
                        style.left = styleX + 'px';
                        style.width = style.height = initialSize + 'px';
                        style.setProperty('--final-scale', "" + finalScale);
                        style.setProperty('--translate-end', moveX + "px, " + moveY + "px");
                        /** @type {?} */
                        var container = _this.elt.shadowRoot || _this.elt;
                        container.appendChild(div);
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            removeRipple(div);
                            resolve((/**
                             * @return {?}
                             */
                            function () {
                            }));
                        }), 225 + 100);
                    }))];
            });
        });
    };
    /**
     * Build Css for component
     */
    /**
     * Build Css for component
     * @private
     * @return {?}
     */
    CdTabButtonComponent.prototype.buildCss = /**
     * Build Css for component
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var className = 'cd-tab-button ';
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
    };
    CdTabButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cd-tab-button',
                    template: "\n        <ng-content></ng-content>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".cd-tab-button{--ripple-color:var(--color-selected);outline:0;width:100%;max-width:var(--cd-tab-max-width);text-align:center;cursor:pointer;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:relative;overflow:hidden;box-sizing:border-box;-webkit-user-drag:none;background:var(--background);color:var(--color);min-height:var(--cd-tab-min-height,50px);padding:var(--cd-tab-padding-v,1rem) var(--cd-tab-padding-h,.5rem);border:var(--cd-tab-border) solid var(--color)}.cd-tab-button:first-child{border-radius:var(--cd-tab-border-radius) 0 0 var(--cd-tab-border-radius)}.cd-tab-button:last-child{border-radius:0 var(--cd-tab-border-radius) var(--cd-tab-border-radius) 0}.cd-tab-button:hover{color:var(--color-hover);background:var(--background-hover)}.cd-tab-button i,.cd-tab-button ion-icon,.cd-tab-button ion-label,.cd-tab-button label{display:block;-ms-grid-row-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;box-sizing:border-box}.cd-tab-button ion-label,.cd-tab-button label{-webkit-box-ordinal-group:1;order:0;font-size:.8rem;line-height:1.4rem}.cd-tab-button label{margin:0;cursor:pointer}.cd-tab-button ion-icon{-webkit-box-ordinal-group:0;order:-1;height:1em;font-size:1.8rem;line-height:2rem}.cd-tab-button i{-webkit-box-ordinal-group:0;order:-1;font-size:1.6rem;vertical-align:baseline}.cd-tab-button ion-badge{box-sizing:border-box;position:absolute;z-index:1;top:5px;right:10px}.cd-tab-button .cd-ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms forwards rippleAnimation,75ms forwards fadeInAnimation;animation:225ms forwards rippleAnimation,75ms forwards fadeInAnimation;will-change:transform,opacity;pointer-events:none}.cd-tab-button .fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1));-webkit-animation:150ms forwards fadeOutAnimation;animation:150ms forwards fadeOutAnimation}.cd-tab-has-label-only ion-label{white-space:normal}.cd-tab-icon-start{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.cd-tab-icon-start i,.cd-tab-icon-start ion-icon{font-size:1.2rem;margin-right:5px}.cd-tab-icon-start ion-label,.cd-tab-icon-start label{font-size:1rem}.cd-tab-icon-end{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;flex-direction:row-reverse}.cd-tab-icon-end i,.cd-tab-icon-end ion-icon{font-size:1.2rem;margin-left:5px}.cd-tab-icon-end ion-label,.cd-tab-icon-end label{font-size:1rem}.cd-tab-hidden{display:none!important}.cd-tab-selected{color:var(--color-selected);background:var(--background-selected)}.cd-tab-disabled{pointer-events:none;opacity:.4}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale,1));transform:translate(var(--translate-end)) scale(var(--final-scale,1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.16}to{opacity:0}}"]
                }] }
    ];
    /** @nocollapse */
    CdTabButtonComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
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
    return CdTabButtonComponent;
}());
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
var removeRipple = (/**
 * @param {?} ripple
 * @return {?}
 */
function (ripple) {
    ripple.classList.add('fade-out');
    setTimeout((/**
     * @return {?}
     */
    function () {
        ripple.remove();
    }), 200);
});
var ɵ0 = removeRipple;
/** @type {?} */
var PADDING = 10;
/** @type {?} */
var INITIAL_ORIGIN_SCALE = 0.5;

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
var CdTabContentComponent = /** @class */ (function () {
    function CdTabContentComponent(elt) {
        this.elt = elt;
        this.active = false;
    }
    Object.defineProperty(CdTabContentComponent.prototype, "content", {
        /**
         * Content of tab
         */
        get: /**
         * Content of tab
         * @return {?}
         */
        function () {
            if (this.elt && this.elt.nativeElement && this.elt.nativeElement.childNodes[0]) {
                return this.elt.nativeElement.childNodes[0].innerHTML;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdTabContentComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.className = this.elt.nativeElement.className;
        this.elt.nativeElement.className = '';
    };
    CdTabContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cd-tab-content',
                    template: "<div [hidden]=\"!active\" [class]=\"className\"><ng-content></ng-content></div>"
                }] }
    ];
    /** @nocollapse */
    CdTabContentComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    CdTabContentComponent.propDecorators = {
        id: [{ type: Input }],
        active: [{ type: Input }],
        content: [{ type: Output }]
    };
    return CdTabContentComponent;
}());
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
            if (tabFn.active === true) {
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
var CdTabsModule = /** @class */ (function () {
    function CdTabsModule() {
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
    return CdTabsModule;
}());

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
