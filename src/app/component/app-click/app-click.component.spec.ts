import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppClickComponent } from './app-click.component';

describe('AppClickComponent', () => {
  let component: AppClickComponent;
  let fixture: ComponentFixture<AppClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
