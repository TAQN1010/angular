import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAtributeBindingComponent } from './app-atribute-binding.component';

describe('AppAtributeBindingComponent', () => {
  let component: AppAtributeBindingComponent;
  let fixture: ComponentFixture<AppAtributeBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAtributeBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAtributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
