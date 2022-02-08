import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDiscordAloComponent } from './tool-discord-alo.component';

describe('ToolDiscordAloComponent', () => {
  let component: ToolDiscordAloComponent;
  let fixture: ComponentFixture<ToolDiscordAloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolDiscordAloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolDiscordAloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
