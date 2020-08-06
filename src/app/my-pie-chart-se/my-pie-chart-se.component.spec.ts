import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPieChartSeComponent } from './my-pie-chart-se.component';

describe('MyPieChartSeComponent', () => {
  let component: MyPieChartSeComponent;
  let fixture: ComponentFixture<MyPieChartSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPieChartSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPieChartSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
