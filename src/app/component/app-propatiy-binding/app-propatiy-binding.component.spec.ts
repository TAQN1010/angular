import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPropatiyBindingComponent } from './app-propatiy-binding.component';

describe('AppPropatiyBindingComponent', () => {
  let component: AppPropatiyBindingComponent;
  let fixture: ComponentFixture<AppPropatiyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPropatiyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPropatiyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
