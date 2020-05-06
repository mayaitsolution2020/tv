import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMotivationComponent } from './videomotivation.component';

describe('VideoMotivationComponent', () => {
  let component: VideoMotivationComponent;
  let fixture: ComponentFixture<VideoMotivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoMotivationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMotivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
