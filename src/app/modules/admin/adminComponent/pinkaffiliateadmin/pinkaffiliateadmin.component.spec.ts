import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkaffiliateAdminComponent } from './pinkaffiliateadmin.component';

describe('PinkaffiliateadminComponent', () => {
  let component: PinkaffiliateAdminComponent;
  let fixture: ComponentFixture<PinkaffiliateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PinkaffiliateAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkaffiliateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
