import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkStats } from './framework-stats';

describe('FrameworkStats', () => {
  let component: FrameworkStats;
  let fixture: ComponentFixture<FrameworkStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworkStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworkStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
