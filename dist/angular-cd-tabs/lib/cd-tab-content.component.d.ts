import { AfterContentInit, ElementRef } from '@angular/core';
export declare class CdTabContentComponent implements AfterContentInit {
    private elt;
    id: string;
    active: boolean;
    className: string;
    /**
     * Content of tab
     */
    readonly content: any;
    constructor(elt: ElementRef);
    ngAfterContentInit(): void;
}
