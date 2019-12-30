import {AfterContentInit, Component, ElementRef, Input, Output} from '@angular/core';

@Component({
    selector: 'cd-tab-content',
    template: `<div [hidden]="!active" [class]="className"><ng-content></ng-content></div>`
})
export class CdTabContentComponent implements AfterContentInit {
    @Input() id: string;
    @Input() active = false;

    className: string;

    /**
     * Content of tab
     */
    @Output() get content() {
        if (this.elt && this.elt.nativeElement && this.elt.nativeElement.childNodes[0]) {
            return this.elt.nativeElement.childNodes[0].innerHTML;
        }
        return '';
    }

    constructor(private elt: ElementRef) {}

    ngAfterContentInit() {
        this.className = this.elt.nativeElement.className;
        this.elt.nativeElement.className = '';
    }
}
