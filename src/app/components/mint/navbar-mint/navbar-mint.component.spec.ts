import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMintComponent } from './navbar-mint.component';

describe('NavbarMintComponent', () => {
  let component: NavbarMintComponent;
  let fixture: ComponentFixture<NavbarMintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
