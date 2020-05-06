import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetoxComponent } from './detox.component';

describe('DetoxComponent', () => {
  let component: DetoxComponent;
  let fixture: ComponentFixture<DetoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
