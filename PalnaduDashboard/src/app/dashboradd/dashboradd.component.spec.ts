import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboraddComponent } from './dashboradd.component';

describe('DashboraddComponent', () => {
  let component: DashboraddComponent;
  let fixture: ComponentFixture<DashboraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
