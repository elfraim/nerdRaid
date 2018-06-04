import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFirstContentComponent } from './learn-first-content.component';

describe('LearnFirstContentComponent', () => {
  let component: LearnFirstContentComponent;
  let fixture: ComponentFixture<LearnFirstContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnFirstContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnFirstContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
