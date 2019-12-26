import {AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList} from '@angular/core';
import {CdTabComponent} from './cd-tab.component';
import {NavigationEnd, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'cd-tabs',
    template: `
        <div class="buttons" [class.vertical]="disposition === 'vertical'" [class.segments]="displayMode === 'segment'">
            <ng-content></ng-content>
        </div>
        <div class="content" [class.hidden]="contentHidden" [innerHtml]="contentToDisplay" *ngIf="contentToDisplay"></div>
    `,
    styleUrls: ['./cd-tabs.component.scss'],
})
export class CdTabsComponent implements AfterViewInit, AfterContentInit, OnInit {

    @ContentChildren(CdTabComponent) tabs: QueryList<CdTabComponent>;

    @Input() color?: string;
    @Input() disposition: string;
    @Input() selectMode = 'config';
    @Input() displayMode = 'none';

    constructor(private elt: ElementRef, private router: Router, private sanitizer: DomSanitizer) {
    }

    contentToDisplay: any;
    contentHidden = true;

    ngOnInit() {
        // style
        if (this.color) {
            this.elt.nativeElement.className += 'ion-color ion-color-' + this.color;
        }
    }

    ngAfterContentInit() {
        this.tabs.toArray().forEach((tabFn) => tabFn.disposition = this.disposition);
    }

    // contentChildren are set
    ngAfterViewInit() {

        if (this.selectMode === 'router') {
            // deactivate all tabs if router link defined
            this.tabs.toArray().forEach((tabFn) => {
                tabFn.active = false;
            });

            // look for select tab according route
            this.router.events.subscribe((res) => {
                if (res instanceof NavigationEnd) {
                    const relatedTabs = this.tabs.filter((tabFn) =>
                        (tabFn.routerLink.join('/').length > 3 && res.url.indexOf(tabFn.routerLink.join('/')) >= 0) ||
                        (tabFn.routerLink.join('/') === res.url));

                    // decativate all tabs
                    this.deactivateAllTabs();

                    // if related url found
                    if (relatedTabs.length > 0) {
                        this.selectTab(relatedTabs[0]);
                    }
                }
            });
        } else {
            // get all active tabs
            const activeTabs = this.tabs.filter((tab) => tab.active);

            // if there is no active tab set, activate the first
            if (activeTabs.length === 0) {
                this.selectTab(this.tabs.first);
            } else {
                this.selectTab(activeTabs[0]);
            }
        }

        // event
        this.tabs.toArray().forEach((tabFn) => tabFn.tabButtonClick.subscribe((event) => {
            // decativate all tabs
            this.deactivateAllTabs();

            this.selectTab(event, true);
        }));

    }

    /**
     * Select a tab
     * @param {CdTabComponent} tab
     * @param {boolean} routing
     */
    selectTab(tab: CdTabComponent, routing = false) {
        // activate the tab title the user has clicked on.
        tab.selected = true;

        // if router link is defined, use router
        if (routing && tab.routerLink && tab.routerLink.length > 0) {
            this.router.navigate(tab.routerLink);
        }

        // get content
        if (tab.content && tab.content.content) {
            this.contentHidden = true;
            setTimeout(() => {
                this.contentToDisplay = this.sanitizer.bypassSecurityTrustHtml(tab.content.content);
                this.contentHidden = false;
            }, 200);
        }
    }

    /**
     * Deactivate all tabs
     */
    deactivateAllTabs() {
        this.tabs.toArray().forEach((tabFn) => tabFn.selected = false);
    }
}
