/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Output } from '@angular/core';
var CdTabContentComponent = /** @class */ (function () {
    function CdTabContentComponent(elt, cdr) {
        this.elt = elt;
        this.cdr = cdr;
        this.activeState = false;
    }
    Object.defineProperty(CdTabContentComponent.prototype, "active", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.activeState = value;
            this.cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
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
    CdTabContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.className = this.elt.nativeElement.className;
        this.elt.nativeElement.className = '';
        this.cdr.detectChanges();
    };
    CdTabContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cd-tab-content',
                    template: "<div [hidden]=\"!activeState\" [class]=\"className\"><ng-content></ng-content></div>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CdTabContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    CdTabContentComponent.propDecorators = {
        id: [{ type: Input }],
        active: [{ type: Input }],
        content: [{ type: Output }]
    };
    return CdTabContentComponent;
}());
export { CdTabContentComponent };
if (false) {
    /** @type {?} */
    CdTabContentComponent.prototype.id;
    /** @type {?} */
    CdTabContentComponent.prototype.activeState;
    /** @type {?} */
    CdTabContentComponent.prototype.className;
    /**
     * @type {?}
     * @private
     */
    CdTabContentComponent.prototype.elt;
    /**
     * @type {?}
     * @private
     */
    CdTabContentComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFiLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jZC10YWJzLyIsInNvdXJjZXMiOlsibGliL2NkLXRhYi1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNVLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUN2RixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUEwQkksK0JBQW9CLEdBQWUsRUFBVSxHQUFzQjtRQUEvQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFiNUQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFhMkMsQ0FBQztJQW5CdkUsc0JBQ0kseUNBQU07Ozs7O1FBRFYsVUFDVyxLQUFjO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFRRCxzQkFBYywwQ0FBTztRQUhyQjs7V0FFRzs7Ozs7UUFDSDtZQUNJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUN6RDtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQzs7O09BQUE7Ozs7SUFJRCwrQ0FBZTs7O0lBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7Z0JBaENKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsc0ZBQWtGO29CQUM1RixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDbEQ7Ozs7Z0JBUnVFLFVBQVU7Z0JBQXhDLGlCQUFpQjs7O3FCQVV0RCxLQUFLO3lCQUNMLEtBQUs7MEJBWUwsTUFBTTs7SUFjWCw0QkFBQztDQUFBLEFBakNELElBaUNDO1NBNUJZLHFCQUFxQjs7O0lBQzlCLG1DQUFvQjs7SUFPcEIsNENBQTJCOztJQUMzQiwwQ0FBeUI7Ozs7O0lBWWIsb0NBQXVCOzs7OztJQUFFLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NkLXRhYi1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgW2hpZGRlbl09XCIhYWN0aXZlU3RhdGVcIiBbY2xhc3NdPVwiY2xhc3NOYW1lXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PmAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2RUYWJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgICBASW5wdXQoKVxuICAgIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICB0aGlzLmFjdGl2ZVN0YXRlID0gdmFsdWU7XG4gICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RpdmVTdGF0ZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbnRlbnQgb2YgdGFiXG4gICAgICovXG4gICAgQE91dHB1dCgpIGdldCBjb250ZW50KCkge1xuICAgICAgICBpZiAodGhpcy5lbHQgJiYgdGhpcy5lbHQubmF0aXZlRWxlbWVudCAmJiB0aGlzLmVsdC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsdC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsdDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXMuZWx0Lm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmVsdC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxufVxuIl19