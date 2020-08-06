import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPieChartTotalComponent } from './my-pie-chart-total.component';

describe('MyPieChartTotalComponent', () => {
  let component: MyPieChartTotalComponent;
  let fixture: ComponentFixture<MyPieChartTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPieChartTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPieChartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
