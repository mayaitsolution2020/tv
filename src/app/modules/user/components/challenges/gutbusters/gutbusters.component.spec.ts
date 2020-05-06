import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GutBustersComponent } from './gutbusters.component';

describe('GutBustersComponent', () => {
  let component: GutBustersComponent;
  let fixture: ComponentFixture<GutBustersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GutBustersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GutBustersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
