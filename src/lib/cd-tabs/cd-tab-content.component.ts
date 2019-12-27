import {Component, ElementRef, Input, Output} from '@angular/core';

@Component({
    selector: 'cd-tab-content',
    template: `<div [hidden]="!active"><ng-content></ng-content></div>`
})
export class CdTabContentComponent {
    @Input() id: string;
    @Input() active = false;

    /**
     * Content of tab
     * @returns {string}
     */
    @Output() get content() {
        if (this.elt && this.elt.nativeElement && this.elt.nativeElement.childNodes[0]) {
            return this.elt.nativeElement.childNodes[0].innerHTML;
        }
        return '';
    }

    constructor(private elt: ElementRef) {}
}
