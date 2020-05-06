import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesAdminComponent } from './quotesadmin.component';

describe('QuotesadminComponent', () => {
  let component: QuotesAdminComponent;
  let fixture: ComponentFixture<QuotesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuotesAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
