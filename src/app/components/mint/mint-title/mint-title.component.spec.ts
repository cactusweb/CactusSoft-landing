import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintTitleComponent } from './mint-title.component';

describe('MintTitleComponent', () => {
  let component: MintTitleComponent;
  let fixture: ComponentFixture<MintTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MintTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
