import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPieChartComComponent } from './my-pie-chart-com.component';

describe('MyPieChartComComponent', () => {
  let component: MyPieChartComComponent;
  let fixture: ComponentFixture<MyPieChartComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPieChartComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPieChartComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
