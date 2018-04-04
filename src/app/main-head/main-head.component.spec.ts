import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeadComponent } from './main-head.component';

describe('MainHeadComponent', () => {
  let component: MainHeadComponent;
  let fixture: ComponentFixture<MainHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
