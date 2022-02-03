import { AfterContentInit, Component } from '@angular/core';
declare const SimpleAdaptiveSlider: any;

@Component({
  selector: 'app-tool-discord-alo',
  templateUrl: './tool-discord-alo.component.html',
  styleUrls: ['./tool-discord-alo.component.scss']
})
export class ToolDiscordAloComponent implements AfterContentInit {
  featurePoints = [
    'Discord joiner',
    'Discord message spammer',
    'Discord invite checker',
    'Token manager',
    // `Discord AI message spammer`,
    // 'Discord nitro claimer',
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
