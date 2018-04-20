import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTwoWayComponent } from './app-two-way.component';

describe('AppTwoWayComponent', () => {
  let component: AppTwoWayComponent;
  let fixture: ComponentFixture<AppTwoWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTwoWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
