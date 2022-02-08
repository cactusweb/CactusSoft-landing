import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CactusThreeDimensionalComponent } from './cactus-three-dimensional.component';

describe('CactusThreeDimensionalComponent', () => {
  let component: CactusThreeDimensionalComponent;
  let fixture: ComponentFixture<CactusThreeDimensionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CactusThreeDimensionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CactusThreeDimensionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
