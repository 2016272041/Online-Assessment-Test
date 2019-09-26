import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletetestsComponent } from './deletetests.component';

describe('DeletetestsComponent', () => {
  let component: DeletetestsComponent;
  let fixture: ComponentFixture<DeletetestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletetestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
