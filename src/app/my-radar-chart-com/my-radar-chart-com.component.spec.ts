import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadarChartComComponent } from './my-radar-chart-com.component';

describe('MyRadarChartComComponent', () => {
  let component: MyRadarChartComComponent;
  let fixture: ComponentFixture<MyRadarChartComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRadarChartComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRadarChartComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
