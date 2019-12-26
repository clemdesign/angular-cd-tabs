import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.page.html',
  styleUrls: ['./basic.page.scss'],
})
export class BasicPage implements OnInit {

    sampleIonicColor = `<cd-tabs color="primary">
  <cd-tab>
    <cd-tab-button>Ionic Tab 1</cd-tab-button>
  </cd-tab>
  <cd-tab>
    <cd-tab-button>Ionic Tab 2</cd-tab-button>
  </cd-tab>
</cd-tabs>`;

  constructor() { }

  ngOnInit() {}

}
