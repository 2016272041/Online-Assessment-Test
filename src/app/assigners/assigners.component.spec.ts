import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignersComponent } from './assigners.component';

describe('AssignersComponent', () => {
  let component: AssignersComponent;
  let fixture: ComponentFixture<AssignersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
