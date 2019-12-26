import {Component, ElementRef, Output} from '@angular/core';

@Component({
    selector: 'cd-tab-content',
    template: `<div hidden><ng-content></ng-content></div>`
})
export class CdTabContentComponent {
    @Output() get content() {
        if (this.elt && this.elt.nativeElement && this.elt.nativeElement.childNodes[0]) {
            return this.elt.nativeElement.childNodes[0].innerHTML;
        }

        return '';
    }

    constructor(private elt: ElementRef) {
    }
}
