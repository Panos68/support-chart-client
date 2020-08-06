import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRadarChartSeComponent } from './my-radar-chart-se.component';

describe('MyRadarChartSeComponent', () => {
  let component: MyRadarChartSeComponent;
  let fixture: ComponentFixture<MyRadarChartSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRadarChartSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRadarChartSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
