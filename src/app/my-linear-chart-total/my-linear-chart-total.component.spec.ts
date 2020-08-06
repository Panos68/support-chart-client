import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinearChartTotalComponent } from './my-linear-chart-total.component';

describe('MyLinearChartTotalComponent', () => {
  let component: MyLinearChartTotalComponent;
  let fixture: ComponentFixture<MyLinearChartTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLinearChartTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLinearChartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
