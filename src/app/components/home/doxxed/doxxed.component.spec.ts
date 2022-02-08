import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoxxedComponent } from './doxxed.component';

describe('DoxxedComponent', () => {
  let component: DoxxedComponent;
  let fixture: ComponentFixture<DoxxedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoxxedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoxxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
