import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadarChartTotalComponent } from './my-radar-chart-total.component';

describe('MyRadarChartTotalComponent', () => {
  let component: MyRadarChartTotalComponent;
  let fixture: ComponentFixture<MyRadarChartTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRadarChartTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRadarChartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
