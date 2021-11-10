import { AfterContentInit, Component } from '@angular/core';
declare const SimpleAdaptiveSlider: any;

@Component({
  selector: 'app-tool-discord-alo',
  templateUrl: './tool-discord-alo.component.html',
  styleUrls: ['./tool-discord-alo.component.scss']
})
export class ToolDiscordAloComponent implements AfterContentInit {
  featurePoints = [
    'Discord link opener',
    'Discord joiner',
    'Discord nitro claimer',
    'Discord message spammer',
    'Token manager',
    'QR Decoder',
    // 'Join on copy'
  ]


  
  ngAfterContentInit(): void {
    new SimpleAdaptiveSlider('#discord.slider', {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
    });
  }
}
