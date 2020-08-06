import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBarChartComComponent } from './my-bar-chart-com.component';

describe('MyBarChartComComponent', () => {
  let component: MyBarChartComComponent;
  let fixture: ComponentFixture<MyBarChartComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBarChartComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBarChartComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
