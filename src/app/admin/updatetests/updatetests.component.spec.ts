import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetestsComponent } from './updatetests.component';

describe('UpdatetestsComponent', () => {
  let component: UpdatetestsComponent;
  let fixture: ComponentFixture<UpdatetestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
