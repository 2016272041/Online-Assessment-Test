import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedcompanyComponent } from './addedcompany.component';

describe('AddedcompanyComponent', () => {
  let component: AddedcompanyComponent;
  let fixture: ComponentFixture<AddedcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
