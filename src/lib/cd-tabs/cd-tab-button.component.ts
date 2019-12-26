import {AfterContentInit, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'cd-tab-button',
    styleUrls: ['./cd-tab-button.component.scss'],
    template: `
        <a><ng-content></ng-content></a>`,
    encapsulation: ViewEncapsulation.None
})
export class CdTabButtonComponent implements AfterContentInit {
    @Output() buttonClick = new EventEmitter();

    @Input() ripple: string;

    @Input() set selected(value) {
        this.selectedStatus = value;
        this.buildCss();
    }

    selectedStatus = false;
    content: string;
    el: HTMLElement;

    @HostListener('click', ['$event.x', '$event.y'])
    onClick(coordX, coordY) {
        this.buttonClick.emit();

        if (this.ripple === 'unbounded' || this.ripple === 'bounded') {
            this.addRipple(coordX, coordY);
        }
    }

    constructor(private elt: ElementRef) {}

    private get hasLabel() {
        return !!this.el.querySelector('ion-label');
    }

    private get hasIcon() {
        return !!this.el.querySelector('ion-icon');
    }

    ngAfterContentInit() {
        this.el = this.elt.nativeElement;
        this.content = this.elt.nativeElement.childNodes[0].innerHTML;

        this.buildCss();
    }

    /**
     * Add Ripple to tab button
     * @param {number} x
     * @param {number} y
     * @returns {Promise}
     */
    async addRipple(x: number, y: number) {
        return new Promise<() => void>(resolve => {
            const rect = this.elt.nativeElement.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const hypotenuse = Math.sqrt(width * width + height * height);
            const maxDim = Math.max(height, width);
            const maxRadius = this.ripple === 'unbounded' ? maxDim : hypotenuse + PADDING;
            const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
            const finalScale = maxRadius / initialSize;
            let posX = x - rect.left;
            let posY = y - rect.top;
            if (this.ripple === 'unbounded') {
                posX = width * 0.5;
                posY = height * 0.5;
            }
            const styleX = posX - initialSize * 0.5;
            const styleY = posY - initialSize * 0.5;
            const moveX = width * 0.5 - posX;
            const moveY = height * 0.5 - posY;

            const div = document.createElement('div');
            div.classList.add('cd-ripple-effect');
            const style = div.style;
            style.top = styleY + 'px';
            style.left = styleX + 'px';
            style.width = style.height = initialSize + 'px';
            style.setProperty('--final-scale', `${finalScale}`);
            style.setProperty('--translate-end', `${moveX}px, ${moveY}px`);

            const container = this.el.shadowRoot || this.el;
            container.appendChild(div);
            setTimeout(() => {
                removeRipple(div);

                resolve(() => {});
            }, 225 + 100);
        });
    }

    /**
     * Build Css for component
     */
    private buildCss() {
        let className = 'cd-tab-button ';
        if (this.selectedStatus) {
            className += 'cd-tab-selected ';
        }
        if (this.hasIcon) {
            className += 'cd-tab-has-icon ';
        }
        if (this.hasLabel) {
            className += 'cd-tab-has-label ';
        }
        if (this.hasLabel && !this.hasIcon) {
            className += 'cd-tab-has-label-only ';
        }
        if (!this.hasLabel && this.hasIcon) {
            className += 'cd-tab-has-icon-only ';
        }

        this.el.className = className;
    }
}

const removeRipple = (ripple: HTMLElement) => {
    ripple.classList.add('fade-out');
    setTimeout(() => {
        ripple.remove();
    }, 200);
};

const PADDING = 10;
const INITIAL_ORIGIN_SCALE = 0.5;
