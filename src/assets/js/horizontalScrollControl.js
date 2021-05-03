let horizontalBlock = document.getElementById('horizontal-scroll');
let innersBlocks = document.querySelectorAll('#horizontal-scroll > *');
let underlayBlock = document.querySelector('.underlay[for="horizontal-scroll"]');
let switchBtns = document.querySelectorAll(`#horizontal-scroll-btns button`);
currentTranslateX = 0;
columnGap = 800;

let tabSize = 780;

let isHorizontalScrollInit = false;







window.addEventListener( 'resize', () => {
    if ( window.innerWidth <= 780 && isHorizontalScrollInit ){
        destroyHorizontalControl();
    }
    else
    if ( !isHorizontalScrollInit && window.innerWidth > tabSize ){
        initHorizontalScrollControl();
    }
})


switchBtns[0].addEventListener( 'click', () => {
    onClickChangeBlock( true )
})
switchBtns[1].addEventListener( 'click', () => {
    onClickChangeBlock( false );
})







if ( window.innerWidth > tabSize )
    initHorizontalScrollControl();
