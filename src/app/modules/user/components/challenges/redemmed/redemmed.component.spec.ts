import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemmedComponent } from './redemmed.component';

describe('RedemmedComponent', () => {
  let component: RedemmedComponent;
  let fixture: ComponentFixture<RedemmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedemmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedemmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
