import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {


  ngOnInit(){
    document.querySelector( 'header' )
      .addEventListener( 'mousemove', this.parallax )
  }
  
  parallax( e ){
    let ells = document.querySelectorAll( '.parallax-block > div' );
    ells.forEach( ell => {
      if ( window.innerWidth < 780 ) return; 
      
      const speed = ell.getAttribute('data-speed');
      
      if (!speed) return;

      let x =  -e.pageX*Number(speed)/100;
      let y = -e.pageY*Number(speed)/100;

      ell['style'].transform = `translate( ${x}px, ${y}px )`
    })
    
  }

}
