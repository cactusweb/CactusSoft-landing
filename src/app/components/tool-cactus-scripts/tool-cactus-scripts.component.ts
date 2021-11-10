import { AfterContentInit, Component, OnInit } from '@angular/core';
declare const SimpleAdaptiveSlider: any;

@Component({
  selector: 'app-tool-cactus-scripts',
  templateUrl: './tool-cactus-scripts.component.html',
  styleUrls: ['./tool-cactus-scripts.component.scss']
})
export class ToolCactusScriptsComponent implements AfterContentInit {
  featurePoints = [
    'AIO Autofill',
    'BInance requst mode',
    'OpenSea Monitor and ACO',
    'Shopify autocheckout',
    // 'Stripe autocheckout',
    'Supreme ATC + ACO',
    'Adidas Autofill + Autocheckout',
    'Zalando'
  ]

  
  ngAfterContentInit(): void {
    new SimpleAdaptiveSlider('#scripts.slider', {
      loop: true,
      autoplay: false,
      interval: 5000,
      swipe: true,
    });
  }
}
