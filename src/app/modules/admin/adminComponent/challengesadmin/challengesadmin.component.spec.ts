import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesAdminComponent } from './challengesadmin.component';

describe('ChallengesadminComponent', () => {
  let component: ChallengesAdminComponent;
  let fixture: ComponentFixture<ChallengesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
