import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TigerEyeComponent } from './tigereye.component';

describe('TigereyeComponent', () => {
  let component: TigerEyeComponent;
  let fixture: ComponentFixture<TigerEyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TigerEyeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TigerEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
