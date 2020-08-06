import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBarChartSeComponent } from './my-bar-chart-se.component';

describe('MyBarChartSeComponent', () => {
  let component: MyBarChartSeComponent;
  let fixture: ComponentFixture<MyBarChartSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBarChartSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBarChartSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
