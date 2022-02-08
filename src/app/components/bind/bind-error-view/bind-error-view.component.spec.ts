import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindErrorViewComponent } from './bind-error-view.component';

describe('BindErrorViewComponent', () => {
  let component: BindErrorViewComponent;
  let fixture: ComponentFixture<BindErrorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindErrorViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindErrorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
