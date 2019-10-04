import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsslistHeaderComponent } from './asslist-header.component';

describe('AsslistHeaderComponent', () => {
  let component: AsslistHeaderComponent;
  let fixture: ComponentFixture<AsslistHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsslistHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsslistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
