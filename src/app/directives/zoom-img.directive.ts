import { AfterContentInit, AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[zoom-img]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseout)': 'onMouseLeave($event)'
  }
})
export class ZoomImgDirective implements AfterContentInit, OnDestroy {
  @Input('src') imgUrl: string;

  zoomIcon: HTMLElement



  constructor(
    private eRef: ElementRef,
    private renderer: Renderer2
  ) { }

  unlistener: () => void

  ngAfterContentInit(){
    this.renderer.setStyle( this.eRef.nativeElement.parentElement, 'position', 'relative' )
    this.zoomIcon = this.renderer.createElement('div')
    this.zoomIcon.id = 'zoom-img-icon';
    this.eRef.nativeElement.parentElement.appendChild(this.zoomIcon)

    this.unlistener = this.renderer.listen( this.zoomIcon, 'click', () => {
      this.zoomImg();
    })
  }

  ngOnDestroy(){
    this.zoomIcon.remove();
    if ( this.unlistener ) this.unlistener();
  }

  zoomImg(){
    let wrapper = this.renderer.createElement('div')
    wrapper.id = 'zoomed-img-wrapper';

    let img = this.renderer.createElement('img')
    img.src = this.imgUrl

    wrapper.appendChild(img)
    
    let atrboard = this.renderer.createElement('div')
    this.renderer.addClass(atrboard, 'artboard')
    
    let unlistener = this.renderer.listen( atrboard, 'click', () => {
      unlistener();
      wrapper.remove();
    })
    
    wrapper.appendChild(atrboard)
    document.body.appendChild( wrapper )


  }

  onMouseEnter(){
    // this.eRef.nativeElement.parentElement.appendChild(this.zoomIcon);
    this.renderer.addClass( this.zoomIcon, 'show' );
  }

  onMouseLeave(e: MouseEvent){
    if ( this.eRef.nativeElement.parentElement.contains(e.relatedTarget) ) return;
    // this.zoomIcon.remove();
    this.renderer.removeClass( this.zoomIcon, 'show' )
  }



}
