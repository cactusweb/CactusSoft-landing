import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBindComponent } from './footer-bind.component';

describe('FooterBindComponent', () => {
  let component: FooterBindComponent;
  let fixture: ComponentFixture<FooterBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
