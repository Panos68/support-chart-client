import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinearChartComComponent } from './my-linear-chart-com.component';

describe('MyLinearChartComComponent', () => {
  let component: MyLinearChartComComponent;
  let fixture: ComponentFixture<MyLinearChartComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLinearChartComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLinearChartComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
