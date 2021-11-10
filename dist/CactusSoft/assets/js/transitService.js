

  let xDown;
  let yDown;
  let currentSection = 1;
  
  function getTouches(evt) {
    return evt.touches ||             // browser API
           evt.originalEvent.touches; // jQuery
  }                                                     
  
  function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0];                                      
      xDown = firstTouch.clientX;                                      
      yDown = firstTouch.clientY;                                      
  };                                                
  
  function handleTouchMove(evt) {
      let direction = '';
      if ( ! xDown || ! yDown ) {
          return;
      }
  
      var xUp = evt.touches[0].clientX;                                    
      var yUp = evt.touches[0].clientY;
  
      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;
  
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
      xDown = null;
      yDown = null;
      return direction;                                          
  };



  function getSectionCountOfBlock(){
      return document.querySelectorAll( ` #${blockId} > .section ` ).length;
  }


  function moveToNextSection(){
    if ( currentScrollTop === (sectionCount-1) * -100 )
        return false;
    document.querySelector(`#${blockId}`).dispatchEvent(new Event( 'scroll', { bubbles: true } ));

    onTopOfMain();
    currentScrollTop -= 100;
    currentSection++;
    document.querySelector(`#${blockId} > section:nth-child(${currentSection})`).focus();

    // if ( window.innerWidth > 780){
      let dispatchEl = document.querySelector("#transit-block > section.section.main > main > app-home-features > div > div > div:nth-child(1)")
      dispatchElW = dispatchEl.offsetWidth;
      dispatchEl.style.width = dispatchElW+5 + 'px'
      setTimeout(() => {
        dispatchEl.style.width = dispatchElW + 'px'
      }, 100);
      // let dispatchEl = document.querySelector("#transit-block > section.section.main > main > app-home-features > div > div > div:nth-child(1)")
      // let currentNumber = dispatchEl.getAttribute('number');
      // dispatchEl.setAttribute( 'number', currentNumber ? Number(currentNumber)+1 : 1 );
    // }  
    document.getElementById( `${blockId}` ).style.transform = `translate( 0px, ${currentScrollTop}vh )`;
    document.getElementById( `${blockId}` ).style['pointer-events'] = 'unset';
    return true;
  }


  // let events = ["abort","afterprint","animationcancel","animationend","animationiteration","animationstart","appinstalled","audioprocess","audioend","audiostart","beforeprint","beforeunload","beginEvent","blocked","blur","boundary","canplay","canplaythrough","change","chargingchange","chargingtimechange","click","close","complete","compositionend","compositionstart","compositionupdate","contextmenu","copy","cut","dblclick","devicechange","devicemotion","deviceorientation","dischargingtimechange","DOMActivate","DOMAttributeNameChanged","DOMAttrModified","DOMCharacterDataModified","DOMContentLoaded","DOMElementNameChanged","DOMFocusIn","DOMFocusOut","DOMNodeInserted","DOMNodeInsertedIntoDocument","DOMNodeRemoved","DOMNodeRemovedFromDocument","DOMSubtreeModified","drag","dragend","dragenter","dragleave","dragover","dragstart","drop","durationchange","emptied","end","ended","endEvent","error","focus","focusin","focusout","fullscreenchange","fullscreenerror","gamepadconnected","gamepaddisconnected","gotpointercapture","hashchange","lostpointercapture","input","invalid","keydown","keypress","keyup","languagechange","levelchange","load","loadeddata","loadedmetadata","loadend","loadstart","mark","message","messageerror","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","nomatch","notificationclick","offline","online","open","orientationchange","pagehide","pageshow","paste","pause","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","pointerlockerror","pointermove","pointerout","pointerover","pointerup","play","playing","popstate","progress","push","pushsubscriptionchange","ratechange","readystatechange","repeatEvent","reset","resize","resourcetimingbufferfull","result","resume","scroll","seeked","seeking","select","selectstart","selectionchange","show","slotchange","soundend","soundstart","speechend","speechstart","stalled","start","storage","submit","success","suspend","SVGAbort","SVGError","SVGLoad","SVGResize","SVGScroll","SVGUnload","SVGZoom","timeout","timeupdate","touchcancel","touchend","touchmove","touchstart","transitionend","unload","upgradeneeded","userproximity","voiceschanged","versionchange","visibilitychange","volumechange","waiting","wheel"]

  // events.forEach( event => {

  //   document.querySelector( `section:last-child` )
  //   .addEventListener( event, () => {
  //     console.log( event )
  //   })
  // })

  

  function moveToPrevSection(){
    if ( currentScrollTop === 0 )
        return false;
    document.querySelector(`#${blockId}`).dispatchEvent(new Event( 'scroll', { bubbles: true } ));

    onLeaveTopOfMain();
    currentScrollTop += 100;
    currentSection--;
    document.querySelector('header').focus()
    document.getElementById( `${blockId}` ).style.transform = `translate( 0px, ${currentScrollTop}vh )`;
    document.getElementById( `${blockId}` ).style['pointer-events'] = 'none';
    return true;
  }

  

  window.addEventListener( 'resize', () =>{
    document.querySelector("#transit-block > section.section.main > main > app-home-features > div > div > div:nth-child(1)").removeAttribute('style')
  })