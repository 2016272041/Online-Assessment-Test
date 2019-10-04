import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsslistComponent } from './asslist.component';

describe('AsslistComponent', () => {
  let component: AsslistComponent;
  let fixture: ComponentFixture<AsslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
