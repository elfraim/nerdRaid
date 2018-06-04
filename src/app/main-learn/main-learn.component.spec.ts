import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLearnComponent } from './main-learn.component';

describe('MainLearnComponent', () => {
  let component: MainLearnComponent;
  let fixture: ComponentFixture<MainLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
