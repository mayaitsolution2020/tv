import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTransformationComponent } from './posttransformation.component';

describe('PostTransformationComponent', () => {
  let component: PostTransformationComponent;
  let fixture: ComponentFixture<PostTransformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostTransformationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
