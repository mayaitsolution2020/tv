import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastListComponent } from './podcastlist.component';

describe('PodcastlistComponent', () => {
  let component: PodcastListComponent;
  let fixture: ComponentFixture<PodcastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PodcastListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
