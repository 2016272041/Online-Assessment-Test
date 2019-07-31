import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedquesComponent } from './addedques.component';

describe('AddedquesComponent', () => {
  let component: AddedquesComponent;
  let fixture: ComponentFixture<AddedquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
