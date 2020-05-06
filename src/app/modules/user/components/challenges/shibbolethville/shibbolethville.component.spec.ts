import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShibbolethVilleComponent } from './shibbolethville.component';

describe('ShibbolethvilleComponent', () => {
  let component: ShibbolethVilleComponent;
  let fixture: ComponentFixture<ShibbolethVilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShibbolethVilleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShibbolethVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
