import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintAboutComponent } from './mint-about.component';

describe('MintAboutComponent', () => {
  let component: MintAboutComponent;
  let fixture: ComponentFixture<MintAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MintAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
