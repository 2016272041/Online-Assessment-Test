import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregsComponent } from './userregs.component';

describe('UserComponent', () => {
  let component: UserregsComponent;
  let fixture: ComponentFixture<UserregsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserregsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserregsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
