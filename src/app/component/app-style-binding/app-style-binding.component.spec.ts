import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStyleBindingComponent } from './app-style-binding.component';

describe('AppStyleBindingComponent', () => {
  let component: AppStyleBindingComponent;
  let fixture: ComponentFixture<AppStyleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppStyleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
