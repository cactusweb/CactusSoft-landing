import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTimerComponent } from './btn-timer.component';

describe('BtnTimerComponent', () => {
  let component: BtnTimerComponent;
  let fixture: ComponentFixture<BtnTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
