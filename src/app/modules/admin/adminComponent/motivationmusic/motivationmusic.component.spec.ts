import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationMusicComponent } from './motivationmusic.component';

describe('MotivationMusicComponent', () => {
  let component: MotivationMusicComponent;
  let fixture: ComponentFixture<MotivationMusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MotivationMusicComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
