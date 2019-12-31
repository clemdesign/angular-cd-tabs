/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Output } from '@angular/core';
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
export { CdTabContentComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2QtdGFiLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jZC10YWJzLyIsInNvdXJjZXMiOlsibGliL2NkLXRhYi1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFtQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFckY7SUFvQkksK0JBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBZDFCLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFjYyxDQUFDO0lBUHZDLHNCQUFjLDBDQUFPO1FBSHJCOztXQUVHOzs7OztRQUNIO1lBQ0ksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDNUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO2FBQ3pEO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDOzs7T0FBQTs7OztJQUlELGtEQUFrQjs7O0lBQWxCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMxQyxDQUFDOztnQkF6QkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxpRkFBNkU7aUJBQzFGOzs7O2dCQUxvQyxVQUFVOzs7cUJBTzFDLEtBQUs7eUJBQ0wsS0FBSzswQkFPTCxNQUFNOztJQWFYLDRCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F0QlkscUJBQXFCOzs7SUFDOUIsbUNBQW9COztJQUNwQix1Q0FBd0I7O0lBRXhCLDBDQUFrQjs7Ozs7SUFZTixvQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyQ29udGVudEluaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY2QtdGFiLWNvbnRlbnQnLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBbaGlkZGVuXT1cIiFhY3RpdmVcIiBbY2xhc3NdPVwiY2xhc3NOYW1lXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgQ2RUYWJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gICAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBhY3RpdmUgPSBmYWxzZTtcblxuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQ29udGVudCBvZiB0YWJcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgZ2V0IGNvbnRlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsdCAmJiB0aGlzLmVsdC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuZWx0Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWx0Lm5hdGl2ZUVsZW1lbnQuY2hpbGROb2Rlc1swXS5pbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWx0OiBFbGVtZW50UmVmKSB7fVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IHRoaXMuZWx0Lm5hdGl2ZUVsZW1lbnQuY2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmVsdC5uYXRpdmVFbGVtZW50LmNsYXNzTmFtZSA9ICcnO1xuICAgIH1cbn1cbiJdfQ==