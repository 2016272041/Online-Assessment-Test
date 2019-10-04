import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsslistItemComponent } from './asslist-item.component';

describe('AsslistItemComponent', () => {
  let component: AsslistItemComponent;
  let fixture: ComponentFixture<AsslistItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsslistItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsslistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
