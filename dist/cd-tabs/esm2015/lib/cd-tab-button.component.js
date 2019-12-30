/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';
export class CdTabButtonComponent {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFiLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNkLXRhYnMvIiwic291cmNlcyI6WyJsaWIvY2QtdGFiLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQW1CLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBU3BJLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFtQzdCLFlBQW9CLE1BQWtCO1FBQWxCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFsQzVCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFheEQsaUJBQVksR0FBRyxRQUFRLENBQUM7SUFzQmpDLENBQUM7Ozs7SUFqQ0QsSUFDSSxPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNyRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7U0FDNUQ7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBUUQsSUFDSSxRQUFRLENBQUMsS0FBSztRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7Ozs7SUFNRCxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU07UUFDbEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMs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O1lBdElKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFFekIsUUFBUSxFQUFFO2tDQUNvQjtnQkFDOUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3hDOzs7O1lBUm9DLFVBQVU7OzswQkFVMUMsTUFBTTtzQkFFTixNQUFNO3FCQVFOLEtBQUs7a0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFFTCxLQUFLO3NCQVNMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDOzs7O0lBekIvQywyQ0FBaUU7O0lBVWpFLHNDQUF3Qjs7SUFDeEIsbUNBQXFCOztJQUNyQiwwQ0FBbUM7O0lBQ25DLDRDQUFpQzs7SUFDakMsd0NBQTJCOztJQVEzQixzQ0FBZ0I7O0lBQ2hCLG1DQUFpQjs7Ozs7SUFXTCxzQ0FBMEI7OztNQStGcEMsWUFBWTs7OztBQUFHLENBQUMsTUFBbUIsRUFBRSxFQUFFO0lBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLFVBQVU7OztJQUFDLEdBQUcsRUFBRTtRQUNaLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7QUFDWixDQUFDLENBQUE7OztNQUVLLE9BQU8sR0FBRyxFQUFFOztNQUNaLG9CQUFvQixHQUFHLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjZC10YWItYnV0dG9uJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jZC10YWItYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBDZFRhYkJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICAgIEBPdXRwdXQoKSBidXR0b25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2RUYWJCdXR0b25Db21wb25lbnQ+KCk7XG5cbiAgICBAT3V0cHV0KClcbiAgICBnZXQgY29udGVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWx0UmVmICYmIHRoaXMuZWx0UmVmLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5lbHRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbHRSZWYubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLmlubmVySFRNTDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgQElucHV0KCkgcmlwcGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGFiOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcm91dGVyTGluazogQXJyYXk8c3RyaW5nPjtcbiAgICBASW5wdXQoKSBpY29uUG9zaXRpb24gPSAnY2VudGVyJztcbiAgICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IHNlbGVjdGVkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuYnVpbGRDc3MoKTtcbiAgICB9XG5cbiAgICBhY3RpdmU6IGJvb2xlYW47XG4gICAgZWx0OiBIVE1MRWxlbWVudDtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQueCcsICckZXZlbnQueSddKVxuICAgIG9uQ2xpY2soY29vcmRYLCBjb29yZFkpIHtcbiAgICAgICAgdGhpcy5idXR0b25DbGljay5lbWl0KHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLnJpcHBsZSA9PT0gJ3VuYm91bmRlZCcgfHwgdGhpcy5yaXBwbGUgPT09ICdib3VuZGVkJykge1xuICAgICAgICAgICAgdGhpcy5hZGRSaXBwbGUoY29vcmRYLCBjb29yZFkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbHRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldCBoYXNMYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5lbHQucXVlcnlTZWxlY3RvcignaW9uLWxhYmVsJyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXQgaGFzSWNvbigpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5lbHQucXVlcnlTZWxlY3RvcignaW9uLWljb24nKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMuZWx0ID0gdGhpcy5lbHRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmJ1aWxkQ3NzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIFJpcHBsZSB0byB0YWIgYnV0dG9uXG4gICAgICovXG4gICAgYXN5bmMgYWRkUmlwcGxlKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTwoKSA9PiB2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmVsdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgaHlwb3RlbnVzZSA9IE1hdGguc3FydCh3aWR0aCAqIHdpZHRoICsgaGVpZ2h0ICogaGVpZ2h0KTtcbiAgICAgICAgICAgIGNvbnN0IG1heERpbSA9IE1hdGgubWF4KGhlaWdodCwgd2lkdGgpO1xuICAgICAgICAgICAgY29uc3QgbWF4UmFkaXVzID0gdGhpcy5yaXBwbGUgPT09ICdib3VuZGVkJyA/IG1heERpbSA6IGh5cG90ZW51c2UgKyBQQURESU5HO1xuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFNpemUgPSBNYXRoLmZsb29yKG1heERpbSAqIElOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsU2NhbGUgPSBtYXhSYWRpdXMgLyBpbml0aWFsU2l6ZTtcbiAgICAgICAgICAgIGxldCBwb3NYID0geCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGxldCBwb3NZID0geSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgaWYgKHRoaXMucmlwcGxlID09PSAnYm91bmRlZCcpIHtcbiAgICAgICAgICAgICAgICBwb3NYID0gd2lkdGggKiAwLjU7XG4gICAgICAgICAgICAgICAgcG9zWSA9IGhlaWdodCAqIDAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlWCA9IHBvc1ggLSBpbml0aWFsU2l6ZSAqIDAuNTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlWSA9IHBvc1kgLSBpbml0aWFsU2l6ZSAqIDAuNTtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVYID0gd2lkdGggKiAwLjUgLSBwb3NYO1xuICAgICAgICAgICAgY29uc3QgbW92ZVkgPSBoZWlnaHQgKiAwLjUgLSBwb3NZO1xuXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjZC1yaXBwbGUtZWZmZWN0Jyk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGRpdi5zdHlsZTtcbiAgICAgICAgICAgIHN0eWxlLnRvcCA9IHN0eWxlWSArICdweCc7XG4gICAgICAgICAgICBzdHlsZS5sZWZ0ID0gc3R5bGVYICsgJ3B4JztcbiAgICAgICAgICAgIHN0eWxlLndpZHRoID0gc3R5bGUuaGVpZ2h0ID0gaW5pdGlhbFNpemUgKyAncHgnO1xuICAgICAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkoJy0tZmluYWwtc2NhbGUnLCBgJHtmaW5hbFNjYWxlfWApO1xuICAgICAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkoJy0tdHJhbnNsYXRlLWVuZCcsIGAke21vdmVYfXB4LCAke21vdmVZfXB4YCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWx0LnNoYWRvd1Jvb3QgfHwgdGhpcy5lbHQ7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZVJpcHBsZShkaXYpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAyMjUgKyAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCdWlsZCBDc3MgZm9yIGNvbXBvbmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgYnVpbGRDc3MoKSB7XG4gICAgICAgIGxldCBjbGFzc05hbWUgPSAnY2QtdGFiLWJ1dHRvbiAnO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSAnY2QtdGFiLXNlbGVjdGVkICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzSWNvbikge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICdjZC10YWItaGFzLWljb24gJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oYXNMYWJlbCkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICdjZC10YWItaGFzLWxhYmVsICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaGFzTGFiZWwgJiYgIXRoaXMuaGFzSWNvbikge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICdjZC10YWItaGFzLWxhYmVsLW9ubHkgJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGFzTGFiZWwgJiYgdGhpcy5oYXNJY29uKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJ2NkLXRhYi1oYXMtaWNvbi1vbmx5ICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaWNvblBvc2l0aW9uID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgKz0gJ2NkLXRhYi1pY29uLXN0YXJ0ICc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaWNvblBvc2l0aW9uID09PSAnZW5kJykge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICdjZC10YWItaWNvbi1lbmQgJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xhc3NOYW1lICs9ICdjZC10YWItZGlzYWJsZWQgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWx0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9XG59XG5cbmNvbnN0IHJlbW92ZVJpcHBsZSA9IChyaXBwbGU6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtb3V0Jyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJpcHBsZS5yZW1vdmUoKTtcbiAgICB9LCAyMDApO1xufTtcblxuY29uc3QgUEFERElORyA9IDEwO1xuY29uc3QgSU5JVElBTF9PUklHSU5fU0NBTEUgPSAwLjU7XG4iXX0=