import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwipeService {
  xDown;
  yDown;

  constructor() { }


  getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
  }                                                     
  
  handleTouchStart(evt) {
      const firstTouch = this.getTouches(evt)[0];                                      
      this.xDown = firstTouch.clientX;                                      
      this.yDown = firstTouch.clientY;                                      
  };                                                
  
  handleTouchMove(evt) {
      let direction = '';

      if ( ! this.xDown || ! this.yDown ) {
          return;
      }
  
      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;
  
      var xDiff = this.xDown - xUp;
      var yDiff = this.yDown - yUp;
  
      if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
          if ( xDiff > 0 ) {
            direction = 'left'
          } else {
            direction = 'right'
          }                       
      } else {
          if ( yDiff > 0 ) {
            direction = 'up'
          } else { 
            direction = 'down';
          }                                                                 
      }
      /* reset values */
      this.xDown = null;
      this.yDown = null;   
      return direction;                                          
  };


}
