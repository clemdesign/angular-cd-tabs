import {
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input,
  Output
} from '@angular/core';

@Component({
    selector: 'cd-tab-content',
    template: `<div [hidden]="!activeState" [class]="className"><ng-content></ng-content></div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdTabContentComponent implements AfterViewInit {
    @Input() id: string;
    @Input()
    set active(value: boolean) {
       this.activeState = value;
       this.cdr.detectChanges();
    }

    public activeState = false;
    public className: string;

    /**
     * Content of tab
     */
    @Output() get content() {
        if (this.elt && this.elt.nativeElement && this.elt.nativeElement.childNodes[0]) {
            return this.elt.nativeElement.childNodes[0].innerHTML;
        }
        return '';
    }

    constructor(private elt: ElementRef, private cdr: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.className = this.elt.nativeElement.className;
        this.elt.nativeElement.className = '';
        this.cdr.detectChanges();
    }
}
