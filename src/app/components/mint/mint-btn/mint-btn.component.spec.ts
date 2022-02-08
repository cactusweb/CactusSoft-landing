import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintBtnComponent } from './mint-btn.component';

describe('MintBtnComponent', () => {
  let component: MintBtnComponent;
  let fixture: ComponentFixture<MintBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MintBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
