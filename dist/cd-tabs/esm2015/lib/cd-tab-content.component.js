/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output } from '@angular/core';
export class CdTabContentComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFiLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jZC10YWJzLyIsInNvdXJjZXMiOlsibGliL2NkLXRhYi1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFNckYsTUFBTSxPQUFPLHFCQUFxQjs7OztJQWdCOUIsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFkMUIsV0FBTSxHQUFHLEtBQUssQ0FBQztJQWNjLENBQUM7Ozs7O0lBUHZDLElBQWMsT0FBTztRQUNqQixJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVFLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztTQUN6RDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUlELGtCQUFrQjtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7O1lBekJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsNkVBQTZFO2FBQzFGOzs7O1lBTG9DLFVBQVU7OztpQkFPMUMsS0FBSztxQkFDTCxLQUFLO3NCQU9MLE1BQU07Ozs7SUFSUCxtQ0FBb0I7O0lBQ3BCLHVDQUF3Qjs7SUFFeEIsMENBQWtCOzs7OztJQVlOLG9DQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJDb250ZW50SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjZC10YWItY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IFtoaWRkZW5dPVwiIWFjdGl2ZVwiIFtjbGFzc109XCJjbGFzc05hbWVcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBDZFRhYkNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDb250ZW50IG9mIHRhYlxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBnZXQgY29udGVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWx0ICYmIHRoaXMuZWx0Lm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5lbHQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbHQubmF0aXZlRWxlbWVudC5jaGlsZE5vZGVzWzBdLmlubmVySFRNTDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbHQ6IEVsZW1lbnRSZWYpIHt9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gdGhpcy5lbHQubmF0aXZlRWxlbWVudC5jbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZWx0Lm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lID0gJyc7XG4gICAgfVxufVxuIl19