import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StandalonePage } from './standalone.page';

describe('StandalonePage', () => {
  let component: StandalonePage;
  let fixture: ComponentFixture<StandalonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandalonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StandalonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
