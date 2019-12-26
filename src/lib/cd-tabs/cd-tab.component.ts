import {AfterContentInit, Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {CdTabButtonComponent} from './cd-tab-button.component';
import {CdTabContentComponent} from './cd-tab-content.component';

@Component({
    selector: 'cd-tab',
    template: `
        <ng-content></ng-content>`,
    styles: [
            `:host {
            flex: 1;

            flex-direction: column;
            align-items: center;
            justify-content: center;

            display: flex;
            position: relative;
            outline: none;

            max-height: 70px;
            max-width: 168px;

            overflow: hidden;

            border: var(--cd-tab-border) solid var(--color);
        }`,
            `:host:first-child {
            border-radius: var(--cd-tab-border-radius) 0 0 var(--cd-tab-border-radius)
        }`,
            `:host:last-child {
            border-radius: 0 var(--cd-tab-border-radius) var(--cd-tab-border-radius) 0
        }`
    ]
})
export class CdTabComponent implements AfterContentInit, OnInit {
    @ContentChildren(CdTabButtonComponent) tabButton: QueryList<CdTabButtonComponent>;
    @ContentChildren(CdTabContentComponent) tabContent: QueryList<CdTabContentComponent>;

    @Output() tabButtonClick = new EventEmitter<CdTabComponent>();

    @Input()
    set selected(value) {
        this.active = value;
        if (this.button) {
            this.button.selected = value;
        }
    }

    @Input() routerLink: Array<string>;

    active: boolean;
    button: any;
    content: any;

    @Input()
    set disposition(value) {
        if (value === 'vertical') {
            this.elt.nativeElement.style.maxWidth = '100%';
        }
    }

    constructor(private elt: ElementRef) {
    }

    ngOnInit() {
        if (this.active === undefined) {
            this.active = false;
        }
    }

    ngAfterContentInit() {
        this.button = this.tabButton.first;
        this.content = this.tabContent.first;

        this.button.buttonClick.subscribe(() => {
            this.onClick();
        });
    }

    onClick() {
        this.tabButtonClick.emit(this);
    }
}
