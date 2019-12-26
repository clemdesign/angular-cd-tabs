import {AfterContentInit, Component, ElementRef} from '@angular/core';

@Component({
    selector: 'cd-tab-content',
    template: `<div hidden><ng-content></ng-content></div>`
})
export class CdTabContentComponent implements AfterContentInit {
    content: string;

    constructor(private elt: ElementRef) {
    }

    ngAfterContentInit() {
        this.content = this.elt.nativeElement.childNodes[0].innerHTML;
    }
}
