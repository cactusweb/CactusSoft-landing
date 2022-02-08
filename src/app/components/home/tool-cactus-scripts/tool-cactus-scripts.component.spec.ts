import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolCactusScriptsComponent } from './tool-cactus-scripts.component';

describe('ToolCactusScriptsComponent', () => {
  let component: ToolCactusScriptsComponent;
  let fixture: ComponentFixture<ToolCactusScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolCactusScriptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolCactusScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
