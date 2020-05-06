import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shibboleth3dayComponent } from './shibboleth3day.component';

describe('Shibboleth3dayComponent', () => {
  let component: Shibboleth3dayComponent;
  let fixture: ComponentFixture<Shibboleth3dayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shibboleth3dayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shibboleth3dayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
