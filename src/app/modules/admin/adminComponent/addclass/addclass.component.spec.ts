import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassComponent } from './addclass.component';

describe('AddclassComponent', () => {
  let component: AddClassComponent;
  let fixture: ComponentFixture<AddClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddClassComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
