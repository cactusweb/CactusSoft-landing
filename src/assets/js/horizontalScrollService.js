

var start = {x:0, y:0};















function destroyHorizontalControl(){
    horizontalBlock.remove();
    underlayBlock.appendChild(horizontalBlock);

    isHorizontalScrollInit = false;
    underlayBlock.removeAttribute('style');
    horizontalBlock.removeAttribute( 'style' );
    horizontalBlock.removeEventListener( 'wheel', onWheelHorisont, false)

    innersBlocks.forEach( block => {
        block.removeAttribute('style');
    })
}

function initHorizontalScrollControl(){
    if ( !document.querySelector('#horizontal-scroll') )
        underlayBlock.appendChild(horizontalBlock);
    isHorizontalScrollInit = true;

    horizontalBlock.addEventListener( 'wheel', onWheelHorisont, true)
    horizontalBlock.addEventListener("touchstart", touchStart, { passive: true });
    horizontalBlock.addEventListener("touchmove", touchMove, false);
    horizontalBlock.style.width = "100%"
    setStartTranslateX( )
    underlayBlock.setAttribute( 'style', `height: ${horizontalBlock.offsetHeight}px; transform: scaleX(-1)` )
    
    window.addEventListener( 'load', () => {
        underlayBlock.setAttribute( 'style', `height: ${horizontalBlock.offsetHeight}px; transform: scaleX(-1)` )
    })
}













function onTopOfMain(  ){
    if ( window.innerWidth < tabSize ) return;

    if ( document.querySelector(`#${blockId} section.main`).scrollTop > 0 )
        return;
    horizontalBlock.dispatchEvent(new Event( 'scroll', { bubbles: true } ));

    underlayBlock.style.overflow = 'initial'
    horizontalBlock.style.position = 'absolute';
    horizontalBlock.style.height = '180vh';
    horizontalBlock.style.top = '50%';
    horizontalBlock.style.right = '0%';
    horizontalBlock.style.transform = 'translate(0, -50%)';
}

function onLeaveTopOfMain(){
    if ( window.innerWidth < tabSize ) return;
    
    if ( document.querySelector(`#${blockId} section.main`).scrollTop <= 0 )
        return;
    
    underlayBlock.style.overflow = 'hidden'
    horizontalBlock.style.position = 'relative';
    horizontalBlock.style.height = 'auto';
    horizontalBlock.style.top = 'auto';
    horizontalBlock.style.right = 'auto';
    horizontalBlock.style.transform = 'none';
}











function onWheelHorisont(e){
    if ( window.innerWidth < tabSize ) return;
    
    if ( 
        (
            (currentTranslateX < getFullHorizontalBlockWidth() - horizontalBlock.offsetWidth + horizontalBlock.offsetWidth/2 - innersBlocks[0].offsetWidth  && e.deltaY > 0 ) 
            || 
            ( e.deltaY < 0 && currentTranslateX != horizontalBlock/-2) 
        )
        && document.querySelector(`#${blockId} section.main`).scrollTop <= 0
    ){
        setNewTranslateX(e.deltaY)
        e.preventDefault();
    }else{
        onLeaveTopOfMain();
    }
}


function touchStart(event) {
    start.x = event.touches[0].pageX;
    start.y = event.touches[0].pageY;
  }
  
  
  function touchMove(event) {
      e = {};
  
      e.deltaX = start.x - event.touches[0].pageX;
      e.deltaY = start.y - event.touches[0].pageY;
    
      if ( 
            (
                (currentTranslateX < getFullHorizontalBlockWidth() - horizontalBlock.offsetWidth + horizontalBlock.offsetWidth/2 - innersBlocks[0].offsetWidth  && e.deltaY > 0 ) 
                ||
                ( e.deltaY < 0 && currentTranslateX != horizontalBlock/-2) 
            ) 
            && document.querySelector(`#${blockId} section.main`).scrollTop <= 0
        ){
        //   document.querySelector(`#${blockId} section.main`).scrollTop = 0
          setNewTranslateX(e.deltaY)
          if (event.cancelable) {
            event.preventDefault();
         }
      }
      else{
          onLeaveTopOfMain();
      }
  }
  

  






function getFullHorizontalBlockWidth(){

    let width = 0 - columnGap;
    innersBlocks.forEach( block => width+=block.offsetWidth+columnGap  )
    return width;

}


function setNewTranslateX( deltaX ){
    if (currentTranslateX + deltaX < horizontalBlock.offsetWidth/ -2 ){
        document.querySelector( `#${blockId} section:nth-child(2)` ).focus();
        document.querySelector( `#${blockId} section:nth-child(2)` ).dispatchEvent(new Event( 'focus', { bubbles: true } ));
        horizontalBlock.style.pointerEvents = 'none';
        setTimeout(() => {
            horizontalBlock.style.pointerEvents = 'unset';
        }, 200);
        currentTranslateX = horizontalBlock.offsetWidth/ -2;
    } else
    if ( currentTranslateX + deltaX >= getFullHorizontalBlockWidth() - horizontalBlock.offsetWidth + horizontalBlock.offsetWidth/2 - innersBlocks[0].offsetWidth ){
        currentTranslateX = getFullHorizontalBlockWidth() - horizontalBlock.offsetWidth + horizontalBlock.offsetWidth/2 - innersBlocks[0].offsetWidth;
        document.querySelector( `#${blockId} section:nth-child(2)` ).focus();
        horizontalBlock.style.pointerEvents = 'none';
        setTimeout(() => {
            horizontalBlock.style.pointerEvents = 'unset';
        }, 200);
    }else
        currentTranslateX += deltaX;

    setCurrentStatusOfSwitchBtns();
        
    innersBlocks.forEach( block => {
        block.style.transform =  `translate3d( calc(${currentTranslateX}px + 50%), 0px, 0px ) scale3d(-1, 1, 1)`;
    })
}

function setStartTranslateX(){

    let fullWidth = horizontalBlock.offsetWidth;

    // for ( let i = 0; )
    setNewTranslateX( -fullWidth/2 )

}



function onClickChangeBlock( toStart ){
    
    // switchBtns.forEach(btn => btn.classList.toggle('active') );

    innersBlocks.forEach( block => block.style.transition = '.6s' )
    currentTranslateX = toStart ? horizontalBlock.offsetWidth/-2 : getFullHorizontalBlockWidth() - horizontalBlock.offsetWidth + horizontalBlock.offsetWidth/2 - innersBlocks[0].offsetWidth;
    setNewTranslateX(0);
    setTimeout(() => {
        innersBlocks.forEach( block => block.style.transition = '0s' )
    }, 600);
}

function setCurrentStatusOfSwitchBtns(){
    let center = (getFullHorizontalBlockWidth() - horizontalBlock.offsetWidth + horizontalBlock.offsetWidth/2 - innersBlocks[0].offsetWidth) + (horizontalBlock.offsetWidth/-2 )
    if ( 
        currentTranslateX <= center && !switchBtns[0].classList.contains('active') 
        || 
        currentTranslateX > center && switchBtns[0].classList.contains('active') 
        )
        switchBtns.forEach(btn => btn.classList.toggle('active') );
}