import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsslistFooterComponent } from './asslist-footer.component';

describe('AsslistFooterComponent', () => {
  let component: AsslistFooterComponent;
  let fixture: ComponentFixture<AsslistFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsslistFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsslistFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
