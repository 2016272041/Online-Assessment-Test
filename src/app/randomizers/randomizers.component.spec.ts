import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizersComponent } from './randomizers.component';

describe('RandomizersComponent', () => {
  let component: RandomizersComponent;
  let fixture: ComponentFixture<RandomizersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomizersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
