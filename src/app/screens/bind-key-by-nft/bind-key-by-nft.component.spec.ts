import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindKeyByNftComponent } from './bind-key-by-nft.component';

describe('BindKeyByNftComponent', () => {
  let component: BindKeyByNftComponent;
  let fixture: ComponentFixture<BindKeyByNftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindKeyByNftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindKeyByNftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
