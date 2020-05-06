import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationAdminComponent } from './transformationadmin.component';

describe('TransformationAdminComponent', () => {
  let component: TransformationAdminComponent;
  let fixture: ComponentFixture<TransformationAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransformationAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
