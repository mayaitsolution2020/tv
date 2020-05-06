import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shibboleth21daysComponent } from './shibboleth21days.component';

describe('Shibboleth21daysComponent', () => {
  let component: Shibboleth21daysComponent;
  let fixture: ComponentFixture<Shibboleth21daysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shibboleth21daysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shibboleth21daysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
