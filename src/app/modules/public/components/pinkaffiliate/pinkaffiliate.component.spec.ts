import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkaffiliateComponent } from './pinkaffiliate.component';

describe('PinkaffiliateComponent', () => {
  let component: PinkaffiliateComponent;
  let fixture: ComponentFixture<PinkaffiliateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinkaffiliateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkaffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
