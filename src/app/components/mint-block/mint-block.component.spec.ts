import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MintBlockComponent } from './mint-block.component';

describe('MintBlockComponent', () => {
  let component: MintBlockComponent;
  let fixture: ComponentFixture<MintBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MintBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MintBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
