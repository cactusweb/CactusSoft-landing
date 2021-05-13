import { Component } from '@angular/core';

@Component({
  selector: 'app-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent {


  hidePrompt(){
    document.querySelector('#three-dimensional .prompt')['style'].animation = 'none';
    document.querySelector('#three-dimensional .prompt')['style'].transition = '.6s';
    setTimeout(() => {

      document.querySelector('#three-dimensional .prompt')['style'].opacity = '0';
    }, 500);
  }

  showPrompt(){
    document.querySelector('#three-dimensional .prompt')['style'].opacity = '.5';
    
    setTimeout(() => {
      document.querySelector('#three-dimensional .prompt')['style'].animation = 'flicker 1.5s linear 0s infinite';
      document.querySelector('#three-dimensional .prompt')['style'].transition = '0s';

    }, 500);
  }

}
