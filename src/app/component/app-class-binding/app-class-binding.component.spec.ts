import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClassBindingComponent } from './app-class-binding.component';

describe('AppClassBindingComponent', () => {
  let component: AppClassBindingComponent;
  let fixture: ComponentFixture<AppClassBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppClassBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
