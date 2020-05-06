import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkaffiliateListComponent } from './pinkaffiliatelist.component';

describe('PinkaffiliatelistComponent', () => {
  let component: PinkaffiliateListComponent;
  let fixture: ComponentFixture<PinkaffiliateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PinkaffiliateListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinkaffiliateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
