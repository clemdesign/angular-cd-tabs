import { AfterContentInit, ElementRef, EventEmitter } from '@angular/core';
export declare class CdTabButtonComponent implements AfterContentInit {
    private eltRef;
    buttonClick: EventEmitter<CdTabButtonComponent>;
    readonly content: any;
    ripple: string;
    tab: string;
    routerLink: Array<string>;
    iconPosition: string;
    disabled: boolean;
    selected: any;
    active: boolean;
    elt: HTMLElement;
    onClick(coordX: any, coordY: any): void;
    constructor(eltRef: ElementRef);
    private readonly hasLabel;
    private readonly hasIcon;
    ngAfterContentInit(): void;
    /**
     * Add Ripple to tab button
     */
    addRipple(x: number, y: number): Promise<() => void>;
    /**
     * Build Css for component
     */
    private buildCss;
}
