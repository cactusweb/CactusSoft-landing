import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBindComponent } from './navbar-bind.component';

describe('NavbarBindComponent', () => {
  let component: NavbarBindComponent;
  let fixture: ComponentFixture<NavbarBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
