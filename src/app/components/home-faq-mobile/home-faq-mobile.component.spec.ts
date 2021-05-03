import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFaqMobileComponent } from './home-faq-mobile.component';

describe('HomeFaqMobileComponent', () => {
  let component: HomeFaqMobileComponent;
  let fixture: ComponentFixture<HomeFaqMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFaqMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFaqMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
