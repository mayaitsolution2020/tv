import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationListComponent } from './transformationlist.component';

describe('TransformationListComponent', () => {
  let component: TransformationListComponent;
  let fixture: ComponentFixture<TransformationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TransformationListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
