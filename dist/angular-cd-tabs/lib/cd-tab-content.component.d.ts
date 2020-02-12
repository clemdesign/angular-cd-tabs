import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
export declare class CdTabContentComponent implements AfterViewInit {
    private elt;
    private cdr;
    id: string;
    active: boolean;
    activeState: boolean;
    className: string;
    /**
     * Content of tab
     */
    readonly content: any;
    constructor(elt: ElementRef, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
}
