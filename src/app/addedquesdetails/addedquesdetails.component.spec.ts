import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedquesdetailsComponent } from './addedquesdetails.component';

describe('AddedquesdetailsComponent', () => {
  let component: AddedquesdetailsComponent;
  let fixture: ComponentFixture<AddedquesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedquesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedquesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
