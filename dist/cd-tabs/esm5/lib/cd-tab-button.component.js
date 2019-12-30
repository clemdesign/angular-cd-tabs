/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
export { CdTabButtonComponent };
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFiLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNkLXRhYnMvIiwic291cmNlcyI6WyJsaWIvY2QtdGFiLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQW1CLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXBJO0lBMENJLDhCQUFvQixNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBbEM1QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDO1FBYXhELGlCQUFZLEdBQUcsUUFBUSxDQUFDO0lBc0JqQyxDQUFDO0lBakNELHNCQUNJLHlDQUFPOzs7O1FBRFg7WUFFSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7YUFDNUQ7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUM7OztPQUFBO0lBUUQsc0JBQ0ksMENBQVE7Ozs7O1FBRFosVUFDYSxLQUFLO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOzs7Ozs7SUFNRCxzQ0FBTzs7Ozs7SUFEUCxVQUNRLE1BQU0sRUFBRSxNQUFNO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxX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O1NBQ25DO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7O2dCQXRJSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBRXpCLFFBQVEsRUFBRSxxQ0FDb0I7b0JBQzlCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDeEM7Ozs7Z0JBUm9DLFVBQVU7Ozs4QkFVMUMsTUFBTTswQkFFTixNQUFNO3lCQVFOLEtBQUs7c0JBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFFTCxLQUFLOzBCQVNMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDOztJQXNHbkQsMkJBQUM7Q0FBQSxBQXZJRCxJQXVJQztTQWhJWSxvQkFBb0I7OztJQUM3QiwyQ0FBaUU7O0lBVWpFLHNDQUF3Qjs7SUFDeEIsbUNBQXFCOztJQUNyQiwwQ0FBbUM7O0lBQ25DLDRDQUFpQzs7SUFDakMsd0NBQTJCOztJQVEzQixzQ0FBZ0I7O0lBQ2hCLG1DQUFpQjs7Ozs7SUFXTCxzQ0FBMEI7OztJQStGcEMsWUFBWTs7OztBQUFHLFVBQUMsTUFBbUI7SUFDckMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsVUFBVTs7O0lBQUM7UUFDUCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEIsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFBOzs7SUFFSyxPQUFPLEdBQUcsRUFBRTs7SUFDWixvQkFBb0IsR0FBRyxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlckNvbnRlbnRJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2QtdGFiLWJ1dHRvbicsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2QtdGFiLWJ1dHRvbi5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgQ2RUYWJCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBAT3V0cHV0KCkgYnV0dG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPENkVGFiQnV0dG9uQ29tcG9uZW50PigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsdFJlZiAmJiB0aGlzLmVsdFJlZi5uYXRpdmVFbGVtZW50ICYmIHRoaXMuZWx0UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWx0UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXS5pbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIEBJbnB1dCgpIHJpcHBsZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRhYjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJvdXRlckxpbms6IEFycmF5PHN0cmluZz47XG4gICAgQElucHV0KCkgaWNvblBvc2l0aW9uID0gJ2NlbnRlcic7XG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmJ1aWxkQ3NzKCk7XG4gICAgfVxuXG4gICAgYWN0aXZlOiBib29sZWFuO1xuICAgIGVsdDogSFRNTEVsZW1lbnQ7XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LngnLCAnJGV2ZW50LnknXSlcbiAgICBvbkNsaWNrKGNvb3JkWCwgY29vcmRZKSB7XG4gICAgICAgIHRoaXMuYnV0dG9uQ2xpY2suZW1pdCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5yaXBwbGUgPT09ICd1bmJvdW5kZWQnIHx8IHRoaXMucmlwcGxlID09PSAnYm91bmRlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUmlwcGxlKGNvb3JkWCwgY29vcmRZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWx0UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgaGFzTGFiZWwoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZWx0LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IGhhc0ljb24oKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuZWx0LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1pY29uJyk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLmVsdCA9IHRoaXMuZWx0UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5idWlsZENzcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBSaXBwbGUgdG8gdGFiIGJ1dHRvblxuICAgICAqL1xuICAgIGFzeW5jIGFkZFJpcHBsZSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8KCkgPT4gdm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5lbHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgICAgIGNvbnN0IGh5cG90ZW51c2UgPSBNYXRoLnNxcnQod2lkdGggKiB3aWR0aCArIGhlaWdodCAqIGhlaWdodCk7XG4gICAgICAgICAgICBjb25zdCBtYXhEaW0gPSBNYXRoLm1heChoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IG1heFJhZGl1cyA9IHRoaXMucmlwcGxlID09PSAnYm91bmRlZCcgPyBtYXhEaW0gOiBoeXBvdGVudXNlICsgUEFERElORztcbiAgICAgICAgICAgIGNvbnN0IGluaXRpYWxTaXplID0gTWF0aC5mbG9vcihtYXhEaW0gKiBJTklUSUFMX09SSUdJTl9TQ0FMRSk7XG4gICAgICAgICAgICBjb25zdCBmaW5hbFNjYWxlID0gbWF4UmFkaXVzIC8gaW5pdGlhbFNpemU7XG4gICAgICAgICAgICBsZXQgcG9zWCA9IHggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBsZXQgcG9zWSA9IHkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIGlmICh0aGlzLnJpcHBsZSA9PT0gJ2JvdW5kZWQnKSB7XG4gICAgICAgICAgICAgICAgcG9zWCA9IHdpZHRoICogMC41O1xuICAgICAgICAgICAgICAgIHBvc1kgPSBoZWlnaHQgKiAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdHlsZVggPSBwb3NYIC0gaW5pdGlhbFNpemUgKiAwLjU7XG4gICAgICAgICAgICBjb25zdCBzdHlsZVkgPSBwb3NZIC0gaW5pdGlhbFNpemUgKiAwLjU7XG4gICAgICAgICAgICBjb25zdCBtb3ZlWCA9IHdpZHRoICogMC41IC0gcG9zWDtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVZID0gaGVpZ2h0ICogMC41IC0gcG9zWTtcblxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2QtcmlwcGxlLWVmZmVjdCcpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBkaXYuc3R5bGU7XG4gICAgICAgICAgICBzdHlsZS50b3AgPSBzdHlsZVkgKyAncHgnO1xuICAgICAgICAgICAgc3R5bGUubGVmdCA9IHN0eWxlWCArICdweCc7XG4gICAgICAgICAgICBzdHlsZS53aWR0aCA9IHN0eWxlLmhlaWdodCA9IGluaXRpYWxTaXplICsgJ3B4JztcbiAgICAgICAgICAgIHN0eWxlLnNldFByb3BlcnR5KCctLWZpbmFsLXNjYWxlJywgYCR7ZmluYWxTY2FsZX1gKTtcbiAgICAgICAgICAgIHN0eWxlLnNldFByb3BlcnR5KCctLXRyYW5zbGF0ZS1lbmQnLCBgJHttb3ZlWH1weCwgJHttb3ZlWX1weGApO1xuXG4gICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsdC5zaGFkb3dSb290IHx8IHRoaXMuZWx0O1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByZW1vdmVSaXBwbGUoZGl2KTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKCkgPT4ge1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMjI1ICsgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQnVpbGQgQ3NzIGZvciBjb21wb25lbnRcbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkQ3NzKCkge1xuICAgICAgICBsZXQgY2xhc3NOYW1lID0gJ2NkLXRhYi1idXR0b24gJztcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJ2NkLXRhYi1zZWxlY3RlZCAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0ljb24pIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnY2QtdGFiLWhhcy1pY29uICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzTGFiZWwpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnY2QtdGFiLWhhcy1sYWJlbCAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhhc0xhYmVsICYmICF0aGlzLmhhc0ljb24pIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnY2QtdGFiLWhhcy1sYWJlbC1vbmx5ICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmhhc0xhYmVsICYmIHRoaXMuaGFzSWNvbikge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICdjZC10YWItaGFzLWljb24tb25seSAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmljb25Qb3NpdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICdjZC10YWItaWNvbi1zdGFydCAnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmljb25Qb3NpdGlvbiA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnY2QtdGFiLWljb24tZW5kICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnY2QtdGFiLWRpc2FibGVkICc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVsdC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgfVxufVxuXG5jb25zdCByZW1vdmVSaXBwbGUgPSAocmlwcGxlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCdmYWRlLW91dCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICByaXBwbGUucmVtb3ZlKCk7XG4gICAgfSwgMjAwKTtcbn07XG5cbmNvbnN0IFBBRERJTkcgPSAxMDtcbmNvbnN0IElOSVRJQUxfT1JJR0lOX1NDQUxFID0gMC41O1xuIl19