import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupbtnComponent } from './signupbtn.component';

describe('SignupbtnComponent', () => {
  let component: SignupbtnComponent;
  let fixture: ComponentFixture<SignupbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
