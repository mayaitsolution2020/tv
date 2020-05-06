import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroDragComponent } from './zerodrag.component';

describe('ZerodragComponent', () => {
  let component: ZeroDragComponent;
  let fixture: ComponentFixture<ZeroDragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ZeroDragComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
