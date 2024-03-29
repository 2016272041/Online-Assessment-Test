import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBlogsComponent } from './manageblogs.component';

describe('ManageblogsComponent', () => {
  let component: ManageBlogsComponent;
  let fixture: ComponentFixture<ManageBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
