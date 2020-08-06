import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLinearChartSeComponent } from './my-linear-chart-se.component';

describe('MyLinearChartSeComponent', () => {
  let component: MyLinearChartSeComponent;
  let fixture: ComponentFixture<MyLinearChartSeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyLinearChartSeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLinearChartSeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
