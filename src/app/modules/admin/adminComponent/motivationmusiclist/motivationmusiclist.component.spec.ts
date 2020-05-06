import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationmusiclistComponent } from './motivationmusiclist.component';

describe('MotivationmusiclistComponent', () => {
  let component: MotivationmusiclistComponent;
  let fixture: ComponentFixture<MotivationmusiclistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivationmusiclistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationmusiclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
