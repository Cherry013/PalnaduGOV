import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsCComponent } from './charts-c.component';

describe('ChartsCComponent', () => {
  let component: ChartsCComponent;
  let fixture: ComponentFixture<ChartsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
