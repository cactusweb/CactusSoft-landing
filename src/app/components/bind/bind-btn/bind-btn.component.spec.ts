import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindBtnComponent } from './bind-btn.component';

describe('BindBtnComponent', () => {
  let component: BindBtnComponent;
  let fixture: ComponentFixture<BindBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
