import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBarChartTotalComponent } from './my-bar-chart-total.component';

describe('MyBarChartTotalComponent', () => {
  let component: MyBarChartTotalComponent;
  let fixture: ComponentFixture<MyBarChartTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBarChartTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBarChartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
