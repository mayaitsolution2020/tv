import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerSlimdownComponent } from './summerslimdown.component';

describe('SummerSlimdownComponent', () => {
  let component: SummerSlimdownComponent;
  let fixture: ComponentFixture<SummerSlimdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummerSlimdownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerSlimdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
