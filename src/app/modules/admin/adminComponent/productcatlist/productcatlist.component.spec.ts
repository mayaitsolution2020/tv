import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcatListComponent } from './productcatlist.component';

describe('ProductcatListComponent', () => {
  let component: ProductcatListComponent;
  let fixture: ComponentFixture<ProductcatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductcatListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
