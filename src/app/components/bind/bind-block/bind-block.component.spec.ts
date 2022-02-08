import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindBlockComponent } from './bind-block.component';

describe('BindBlockComponent', () => {
  let component: BindBlockComponent;
  let fixture: ComponentFixture<BindBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
