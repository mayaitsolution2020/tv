import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravisRecommendComponent } from './travisrecommend.component';

describe('TravisRecommendComponent', () => {
  let component: TravisRecommendComponent;
  let fixture: ComponentFixture<TravisRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TravisRecommendComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravisRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
