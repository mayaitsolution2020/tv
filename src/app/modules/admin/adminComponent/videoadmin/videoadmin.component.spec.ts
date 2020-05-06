import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAdminComponent } from './videoadmin.component';

describe('VideoAdminComponent', () => {
  let component: VideoAdminComponent;
  let fixture: ComponentFixture<VideoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
