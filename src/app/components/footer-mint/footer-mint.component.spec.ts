import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMintComponent } from './footer-mint.component';

describe('FooterMintComponent', () => {
  let component: FooterMintComponent;
  let fixture: ComponentFixture<FooterMintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
