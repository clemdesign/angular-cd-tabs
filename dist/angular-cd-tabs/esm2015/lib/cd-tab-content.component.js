/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Output } from '@angular/core';
export class CdTabContentComponent {
    /**
     * @param {?} elt
     * @param {?} cdr
     */
    constructor(elt, cdr) {
        this.elt = elt;
        this.cdr = cdr;
        this.activeState = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set active(value) {
        this.activeState = value;
        this.cdr.detectChanges();
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
    ngAfterViewInit() {
        this.className = this.elt.nativeElement.className;
        this.elt.nativeElement.className = '';
        this.cdr.detectChanges();
    }
}
CdTabContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'cd-tab-content',
                template: `<div [hidden]="!activeState" [class]="className"><ng-content></ng-content></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CdTabContentComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFiLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jZC10YWJzLyIsInNvdXJjZXMiOlsibGliL2NkLXRhYi1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNVLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUN2RixNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFPdkIsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7SUFxQjlCLFlBQW9CLEdBQWUsRUFBVSxHQUFzQjtRQUEvQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFiNUQsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFhMkMsQ0FBQzs7Ozs7SUFuQnZFLElBQ0ksTUFBTSxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQVFELElBQWMsT0FBTztRQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUN6RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUlELGVBQWU7UUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7O1lBaENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsa0ZBQWtGO2dCQUM1RixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNsRDs7OztZQVJ1RSxVQUFVO1lBQXhDLGlCQUFpQjs7O2lCQVV0RCxLQUFLO3FCQUNMLEtBQUs7c0JBWUwsTUFBTTs7OztJQWJQLG1DQUFvQjs7SUFPcEIsNENBQTJCOztJQUMzQiwwQ0FBeUI7Ozs7O0lBWWIsb0NBQXVCOzs7OztJQUFFLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NkLXRhYi1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgW2hpZGRlbl09XCIhYWN0aXZlU3RhdGVcIiBbY2xhc3NdPVwiY2xhc3NOYW1lXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PmAsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgQ2RUYWJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgICBASW5wdXQoKVxuICAgIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICB0aGlzLmFjdGl2ZVN0YXRlID0gdmFsdWU7XG4gICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhY3RpdmVTdGF0ZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENvbnRlbnQgb2YgdGFiXG4gICAgICovXG4gICAgQE91dHB1dCgpIGdldCBjb250ZW50KCkge1xuICAgICAgICBpZiAodGhpcy5lbHQgJiYgdGhpcy5lbHQubmF0aXZlRWxlbWVudCAmJiB0aGlzLmVsdC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVsdC5uYXRpdmVFbGVtZW50LmNoaWxkTm9kZXNbMF0uaW5uZXJIVE1MO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsdDogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXMuZWx0Lm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmVsdC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICcnO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxufVxuIl19