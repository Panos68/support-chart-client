import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSelector } from './chart-selector';

describe('ChartSelector', () => {
  let component: ChartSelector;
  let fixture: ComponentFixture<ChartSelector>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartSelector ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
