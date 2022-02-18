import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowGetLicenseComponent } from './how-get-license.component';

describe('HowGetLicenseComponent', () => {
  let component: HowGetLicenseComponent;
  let fixture: ComponentFixture<HowGetLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowGetLicenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowGetLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
