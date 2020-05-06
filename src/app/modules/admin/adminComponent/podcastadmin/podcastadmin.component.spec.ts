import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastAdminComponent } from './podcastadmin.component';

describe('PodcastadminComponent', () => {
  let component: PodcastAdminComponent;
  let fixture: ComponentFixture<PodcastAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastAdminComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
