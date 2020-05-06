import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoMotivationListComponent } from './videomotivationlist.component';

describe('VideoMotivationListComponent', () => {
  let component: VideoMotivationListComponent;
  let fixture: ComponentFixture<VideoMotivationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoMotivationListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoMotivationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
